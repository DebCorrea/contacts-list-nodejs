import { NextFunction, Request, Response } from "express";

import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";

const duplicatedContact = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ id: req.userId });

  const contactEmail = user!.contacts.find(
    (contact) => contact.email === req.body.email
  );

  if (contactEmail) {
    return res
      .status(403)
      .json({ message: "You already have a contact with this info" });
  }

  const contactNumber = user!.contacts.find(
    (contact) => contact.number === req.body.number
  );

  if (contactNumber) {
    return res
      .status(403)
      .json({ message: "You already have a contact with this info" });
  }

  next();
};

export { duplicatedContact };
