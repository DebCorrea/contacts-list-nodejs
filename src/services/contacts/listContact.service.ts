import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";

const listContactService = async (id: string): Promise<Contact> => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const contact = await contactRepository.findOneBy({ id });

  return contact!;
};

export { listContactService };
