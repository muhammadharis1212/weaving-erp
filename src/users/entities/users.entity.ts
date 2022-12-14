import { type } from 'os';
import { Vendor } from 'src/vendors/entities/vendor.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ nullable: true })
  name: string;
  @Column({ unique: true })
  email: string;
  @Column()
  password: string;
  @Column({ nullable: true })
  phone: string;
  @Column({ nullable: true })
  companyName: string;
  @Column({ nullable: true })
  addressLine1: string;
  @Column({ nullable: true })
  addressLine2: string;
  @Column({ nullable: true })
  state: string;
  @Column({ nullable: true })
  city: string;
  @Column({ nullable: true })
  postal: string;

  @OneToMany(() => Vendor, (vendor) => vendor.user)
  vendors: Vendor[];
}
