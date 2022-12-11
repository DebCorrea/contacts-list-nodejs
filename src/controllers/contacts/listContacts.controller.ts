import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";

import { listContactsService } from "../../services/contacts/listContacts.service";

const listContactsController = async (req: Request, res: Response) => {
  const id = req.userId;

  const contacts = await listContactsService(id);

  return res.status(200).json(instanceToPlain(contacts));
};

export { listContactsController };
