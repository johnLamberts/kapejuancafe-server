import { NextFunction, Request, Response } from "express";
// eslint-disable-next-line import/no-extraneous-dependencies
import createHttpError from "http-errors";

export function notFoundMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  next(createHttpError(404, `Route - ${req.originalUrl} not found!`));
}
