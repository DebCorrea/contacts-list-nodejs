import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";

const listUserService = async (id: string): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ id });

  return user!;
};

export { listUserService };
