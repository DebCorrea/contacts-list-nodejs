import { hashSync } from "bcryptjs";
import { v4 as uuid } from "uuid";

import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUserRequest } from "../../interfaces/users";

const createUserService = async ({
  fullName,
  username,
  password,
  email,
  number,
}: IUserRequest): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = userRepository.create({
    id: uuid(),
    fullName,
    username,
    password: hashSync(password),
    email,
    number,
  });

  await userRepository.save(user);

  return user;
};

export { createUserService };
