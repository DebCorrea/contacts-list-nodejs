import { Request, Response } from "express";

import { deleteUserService } from "../../services/users/deleteUser.service";

const deleteUserController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const deleted = await deleteUserService(id);

  return res.status(204).json(deleted);
};

export { deleteUserController };
