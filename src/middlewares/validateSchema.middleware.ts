import { NextFunction, Request, Response } from "express";
import { AnySchema } from "yup";

const validateSchema =
  (shape: AnySchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      try {
        const validatedData = await shape.validate(req.body, {
          abortEarly: false,
          stripUnknown: true,
        });

        req.userData = validatedData;

        return next();
      } catch (err: any) {
        return res.status(400).json({
          message: err.errors?.join(", "),
        });
      }
    } catch (err) {
      next(err);
    }
  };

export default validateSchema;
