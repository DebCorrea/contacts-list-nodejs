import { NextFunction, Request, Response } from "express";

import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";
import { AppError } from "../errors/AppError";

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
    throw new AppError("This username is already being used", 403);
  }

  const duplicatedEmail = await userRepository.findOneBy({
    email: req.userData.email,
  });

  if (duplicatedEmail) {
    throw new AppError("This email is already being used", 403);
  }

  const duplicatedNumber = await userRepository.findOneBy({
    number: req.userData.number,
  });

  if (duplicatedNumber) {
    throw new AppError("This number is already being used", 403);
  }

  next()
};

export { duplicatedUser };
