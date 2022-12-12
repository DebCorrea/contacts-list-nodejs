import "reflect-metadata";
import express from "express";
import "express-async-errors";
import cors from "cors";

import handleError from "./middlewares/handleError.middleware";
import { appRoutes } from "./routes";

const app = express();

app.use(express.json());

app.use(cors({ origin: "*" }));

appRoutes(app);

app.use(handleError);

export default app;
