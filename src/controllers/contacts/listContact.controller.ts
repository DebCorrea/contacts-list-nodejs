import { Request, Response } from "express";

import { listContactService } from "../../services/contacts/listContact.service";

const listContactController = async (req: Request, res: Response) => {
  const id = req.params.id;

  const contact = await listContactService(id);

  return res.status(200).json(contact);
};

export { listContactController };
