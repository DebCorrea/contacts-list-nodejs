import { NextFunction, Request, Response } from "express";

import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";

const isContactOwner = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ id: req.userId });

  const contact = user!.contacts.find(
    (contact) => contact.id === req.params.id
  );

  if (!contact) {
    return res.status(404).json({ message: "Contact not found" });
  }

  next();
};

export { isContactOwner };
