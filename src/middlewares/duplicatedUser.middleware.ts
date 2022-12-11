import { NextFunction, Request, Response } from "express";

import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";

const duplicatedUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userRepository = AppDataSource.getRepository(User);

  const duplicatedUsername = await userRepository.findOneBy({
    username: req.userData.username,
  });

  if (duplicatedUsername) {
    return res
      .status(403)
      .json({ message: "This username is already being used" });
  }

  const duplicatedEmail = await userRepository.findOneBy({
    email: req.userData.email,
  });

  if (duplicatedEmail) {
    return res
      .status(403)
      .json({ message: "This email is already being used" });
  }

  const duplicatedNumber = await userRepository.findOneBy({
    number: req.userData.number,
  });

  if (duplicatedNumber) {
    return res
      .status(403)
      .json({ message: "This number is already being used" });
  }

  next();
};

export { duplicatedUser };
