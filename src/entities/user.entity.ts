import { Exclude } from "class-transformer";
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
} from "typeorm";

import { Contact } from "./contact.entity";

@Entity("users")
class User {
  @PrimaryColumn("uuid")
  id: string;

  @Column({ length: 100 })
  fullName: string;

  @Column({ length: 20, unique: true })
  username: string;

  @Exclude()
  @Column()
  password: string;

  @Column({ unique: true, length: 60 })
  email: string;

  @Column({ unique: true, length: 15 })
  number: string;

  @CreateDateColumn()
  registrationDate: Date;

  @OneToMany(() => Contact, (contact) => contact.owner, { eager: true })
  contacts: Contact[];
}

export { User };
