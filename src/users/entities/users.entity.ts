import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ nullable: true })
  name: string;
  @Column()
  email: string;
  @Column()
  password: string;
  @Column({ nullable: true })
  phone: string;
}
