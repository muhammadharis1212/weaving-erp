import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { PartyService } from './party.service';
import { CreatePartyDto } from './dto/create-party.dto';
import { UpdatePartyDto } from './dto/update-party.dto';
import { SkipAuth } from 'src/auth/constants/constants';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Party } from './entities/party.entity';
import { CreateDeleteDto } from './dto/create-delete-party.dto';

@SkipAuth()
@ApiTags('Party')
@Controller('party')
export class PartyController {
  constructor(private readonly partyService: PartyService) {}

  @ApiCreatedResponse({
    type: CreateDeleteDto,
    description: 'Party Created Successfully',
  })
  @Post('new')
  create(@Body() createPartyDto: CreatePartyDto) {
    return this.partyService.create(createPartyDto);
  }

  @ApiOkResponse({ type: Party, isArray: true })
  @Get()
  findAll() {
    return this.partyService.findAll();
  }

  @ApiOkResponse({ type: Party })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.partyService.findOne(+id);
  }
  @ApiOkResponse({ type: Party })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePartyDto: UpdatePartyDto) {
    return this.partyService.update(+id, updatePartyDto);
  }

  @ApiCreatedResponse({ type: CreateDeleteDto })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.partyService.remove(+id);
  }
}
