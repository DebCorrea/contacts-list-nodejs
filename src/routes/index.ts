import { Express } from "express";

import { userRoutes } from "./user.routes";
import { sessionRoutes } from "./sessions.routes";
import { contactRoutes } from "./contacts.routes";

export const appRoutes = (app: Express) => {
  app.use("/users", userRoutes());
  app.use("/login", sessionRoutes());
  app.use("/contacts", contactRoutes());
};
