import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";

import { createUserService } from "../../services/users/createUser.service";

const createUserController = async (req: Request, res: Response) => {
  const { userData } = req;

  const user = await createUserService(userData);

  return res.status(201).json(instanceToPlain(user));
};

export { createUserController };
