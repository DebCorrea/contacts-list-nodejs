import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";

import { updateUserService } from "../../services/users/updateUser.service";

const updateUserController = async (req: Request, res: Response) => {
  const { fullName, username, password, email, number } = req.body;

  const id = req.userId;

  const user = await updateUserService(
    {
      fullName,
      username,
      password,
      email,
      number,
    },
    id
  );

  return res.status(200).json(instanceToPlain(user));
};

export { updateUserController };
