import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePartyDto } from './dto/create-party.dto';
import { UpdatePartyDto } from './dto/update-party.dto';

@Injectable()
export class PartyService {
  constructor(private prisma: PrismaService) {}
  create(createPartyDto: CreatePartyDto) {
    return this.prisma.party.create({
      data: {
        ...createPartyDto,
        address: { create: createPartyDto.address },
        contact: { create: createPartyDto.contact },
      },
    });
  }

  findAll() {
    return this.prisma.party.findMany({
      include: {
        address: {
          select: {
            id: true,
            addressLine1: true,
            addressLine2: true,
            city: true,
            state: true,
            country: true,
            postalCode: true,
            createdAt: true,
            updatedAt: true,
          },
        },
        contact: { select: { phone: true } },
      },
    });
  }

  findOne(id: number) {
    return this.prisma.party.findUnique({
      where: { id },
      include: {
        address: {
          select: {
            addressLine1: true,
            addressLine2: true,
            city: true,
            state: true,
            country: true,
            postalCode: true,
            createdAt: true,
            updatedAt: true,
          },
        },
        contact: { select: { phone: true } },
      },
    });
  }

  async update(id: number, updatePartyDto: UpdatePartyDto) {
    const { address, contact, ...party } = updatePartyDto;

    return await this.prisma.$transaction(async (tx) => {
      const updatedAddresses = [];
      const updatedContacts = [];
      if (
        !(await tx.party.update({
          where: { id },
          data: { ...party },
        }))
      ) {
        throw new NotFoundException();
      }
      const updatedParty = await tx.party.update({
        where: { id },
        data: { ...party },
      });

      if (address?.length) {
        for (const iterator of address) {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { id, ...address } = iterator;
          const update = await tx.address.update({
            where: { id: iterator.id },
            data: { ...address },
            select: {
              addressLine1: true,
              addressLine2: true,
              city: true,
              state: true,
              country: true,
              postalCode: true,
              createdAt: true,
              updatedAt: true,
            },
          });
          updatedAddresses.push(update);
        }
      }
      if (contact?.length) {
        for (const iterator of contact) {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { id, ...contact } = iterator;
          const update = await tx.contact.update({
            where: { id: iterator.id },
            data: { ...contact },
          });
          updatedContacts.push(update);
        }
      }
      return {
        ...updatedParty,
        address: updatedAddresses,
        contact: updatedContacts,
      };
    });
  }

  async remove(id: number) {
    try {
      const addresses = this.prisma.address.deleteMany({
        where: { partyId: id },
      });
      const contacts = this.prisma.contact.deleteMany({
        where: { partyId: id },
      });
      const party = this.prisma.party.delete({ where: { id } });
      const transaction = await this.prisma.$transaction([
        addresses,
        contacts,
        party,
      ]);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const [a, b, result] = transaction;
      return result;
    } catch (e) {
      console.error('Error : ', e);
      throw e;
    }
  }
  async findAllSuppliers(query: string) {
    return await this.prisma.party.findMany({
      where: { role: { equals: 'supplier', mode: 'insensitive' } },
      orderBy: { firstName: 'asc' },
    });
  }
}
