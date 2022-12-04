import { Router } from "express";

import { createUserController } from "../controllers/users/createUser.controller";
import { listUsersController } from "../controllers/users/listUsers.controller";
import { duplicatedUser } from "../middlewares/duplicatedUser.middleware";
import { ensureAuth } from "../middlewares/ensureAuth.middleware";
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
  routes.get("/", ensureAuth, listUsersController);

  return routes;
};
