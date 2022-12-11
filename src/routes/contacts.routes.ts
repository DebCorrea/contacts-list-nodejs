import { Router } from "express";

import { ensureAuth } from "../middlewares/ensureAuth.middleware";
import { validateSchema } from "../middlewares/validateContact.middleware";
import { validateContactSchema } from "../schemas/contact.schema";
import { createContactController } from "../controllers/contacts/createContact.controller";
import { listContactsController } from "../controllers/contacts/listContacts.controller";
import { isContactOwner } from "../middlewares/isContactOwner.middleware";
import { listContactController } from "../controllers/contacts/listContact.controller";

const routes = Router();

const contactRoutes = () => {
  routes.post(
    "/",
    ensureAuth,
    validateSchema(validateContactSchema),
    createContactController
  );
  routes.get("/", ensureAuth, listContactsController);
  routes.get("/:id", ensureAuth, isContactOwner, listContactController);

  return routes;
};

export { contactRoutes };
