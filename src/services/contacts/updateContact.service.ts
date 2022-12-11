import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { IContactRequest } from "../../interfaces/contacts";

const updateContactService = async (
  { fullName, email, number }: IContactRequest,
  id: string
): Promise<Contact> => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const contact = await contactRepository.findOneBy({ id });

  await contactRepository.update(
    { id },
    {
      fullName: fullName ? fullName : contact!.fullName,
      email: email ? email : contact!.email,
      number: number ? number : contact!.number,
    }
  );

  const updatedContact = await contactRepository.findOneBy({ id });

  return updatedContact!;
};

export { updateContactService };
