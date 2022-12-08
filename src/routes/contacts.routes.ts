import { Router } from "express";

import { ensureAuth } from "../middlewares/ensureAuth.middleware";
import { validateSchema } from "../middlewares/validateContact.middleware";
import { validateContactSchema } from "../schemas/contact.schema";
import { createContactController } from "../controllers/contacts/createContact.controller";

const routes = Router();

const contactRoutes = () => {
  routes.post(
    "/",
    ensureAuth,
    validateSchema(validateContactSchema),
    createContactController
  );

  return routes;
};

export { contactRoutes };
