import { compareSync } from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";

import { IUserLogin } from "../../interfaces/users";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";

const createSessionService = async ({ username, password }: IUserLogin) => {
  const userRepository = AppDataSource.getRepository(User);

  if (!username || !password) {
    throw new AppError("Username and password are required fields", 400);
  }

  const user = await userRepository.findOneBy({ username });

  if (!user) {
    throw new AppError("Invalid email or password", 403);
  }

  const passwordMatch = compareSync(password, user.password);

  if (!passwordMatch) {
    throw new AppError("Invalid email or password", 403);
  }

  const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY!, {
    expiresIn: "24h",
  });

  return token;
};

export { createSessionService };
