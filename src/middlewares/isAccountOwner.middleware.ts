import { NextFunction, Request, Response } from "express";

const isAccountOwner = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  if (id !== req.userId) {
    return res.status(403).json({
      message: "You don't have permission to perform this action",
    });
  }

  next();
};

export { isAccountOwner };
