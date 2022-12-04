import { Router } from "express";

import { createUserController } from "../controllers/users/createUser.controller";
import { duplicatedUser } from "../middlewares/duplicatedUser.middleware";
import validateSchema from "../middlewares/validateSchema.middleware";
import { validateUserSchema } from "../schemas/user.schema";

const routes = Router();

export const userRoutes = () => {
  routes.post(
    "/",
    validateSchema(validateUserSchema),
    duplicatedUser,
    createUserController
  );

  return routes;
};
