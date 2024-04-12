import express, {
  Request,
  Response,
  NextFunction,
  RequestHandler,
  ErrorRequestHandler,
} from "express";

export const errorMiddleware: ErrorRequestHandler = (error, req, res, __) => {
  console.error(error);
  res.status(500).send({ errors: [{ message: "Something went wrong" }] });
};

export const bodyParserMiddleware = express.json();

export const loggerMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

export default [errorMiddleware, loggerMiddleware, bodyParserMiddleware];
