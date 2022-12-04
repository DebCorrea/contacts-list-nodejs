import * as express from "express";

import { IUserRequest } from "../../interfaces/users";

declare global {
  namespace Express {
    interface Request {
      userData: IUserRequest;
    }
  }
}
