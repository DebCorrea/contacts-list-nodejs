import * as express from "express";

import { IUserRequest } from "../../interfaces/users";
import { IContactRequest } from "../../interfaces/contacts";

declare global {
  namespace Express {
    interface Request {
      userData: IUserRequest;
      userId: string;
      contactData: IContactRequest;
    }
  }
}
