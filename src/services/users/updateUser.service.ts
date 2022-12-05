import { hashSync } from "bcryptjs";

import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUserRequest } from "../../interfaces/users";

const updateUserService = async (
  { fullName, username, password, email, number }: IUserRequest,
  id: string
): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ id });

  await userRepository.update(
    { id },
    {
      fullName: fullName ? fullName : user?.fullName,
      username: username ? username : user?.username,
      password: password ? hashSync(password) : user?.password,
      email: email ? email : user?.email,
      number: number ? number : user?.number,
    }
  );

  const updatedUser = await userRepository.findOneBy({ id });

  return updatedUser!;
};

export { updateUserService };
