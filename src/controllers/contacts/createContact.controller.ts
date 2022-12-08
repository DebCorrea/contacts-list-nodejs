import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";

import { createContactService } from "../../services/contacts/createContact.service";

const createContactController = async (req: Request, res: Response) => {
  const { contactData } = req;

  const id = req.userId;

  const contact = await createContactService(contactData, id);

  return res.status(201).json(instanceToPlain(contact));
};

export { createContactController };
