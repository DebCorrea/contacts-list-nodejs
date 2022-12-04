import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";

import { User } from "./user.entity";

@Entity("contacts")
class Contact {
  @PrimaryColumn("uuid")
  id: string;

  @Column({ length: 80 })
  fullName: string;

  @Column({ length: 60 })
  email: string;

  @Column({ length: 15 })
  number: string;

  @ManyToOne(() => User, { nullable: false, onDelete: "CASCADE" })
  owner: User;
}

export { Contact };
