import { v4 as uuid } from "uuid";

import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { User } from "../../entities/user.entity";
import { IContactRequest } from "../../interfaces/contacts";

const createContactService = async (
  { fullName, email, number }: IContactRequest,
  id: string
): Promise<Contact> => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ id });

  const contact = contactRepository.create({
    id: uuid(),
    fullName,
    email,
    number,
    owner: user!,
  });

  await contactRepository.save(contact);

  return contact;
};

export { createContactService };
