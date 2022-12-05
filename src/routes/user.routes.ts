import { Router } from "express";

import { createUserController } from "../controllers/users/createUser.controller";
import { listUserController } from "../controllers/users/listUser.controller";
import { listUsersController } from "../controllers/users/listUsers.controller";
import { updateUserController } from "../controllers/users/updateUser.controller";
import { duplicatedUser } from "../middlewares/duplicatedUser.middleware";
import { ensureAuth } from "../middlewares/ensureAuth.middleware";
import { isAccountOwner } from "../middlewares/isAccountOwner.middleware";
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
  routes.get("/:id", ensureAuth, isAccountOwner, listUserController);
  routes.patch("/:id", ensureAuth, isAccountOwner, updateUserController);

  return routes;
};
