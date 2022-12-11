import { Request, Response } from "express";

import { updateContactService } from "../../services/contacts/updateContact.service";

const updateContactController = async (req: Request, res: Response) => {
  const { fullName, email, number } = req.body;

  const { id } = req.params;

  const contact = await updateContactService({ fullName, email, number }, id);

  return res.status(200).json(contact);
};

export { updateContactController };
