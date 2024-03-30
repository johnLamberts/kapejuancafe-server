import { ErrorRequestHandler, Response } from "express";
import { IErrorResponse } from "~/interface/ErrorResponse";

export const errorHandlerMiddlware: ErrorRequestHandler = (
  error,
  req,
  res: Response<IErrorResponse>,
) => {
  const statusCode = error.statusCode || 500;

  res?.status(statusCode).send({
    data: null,
    success: false,
    error: true,
    message: error.message || "Internal Server Error",
    status: statusCode,
    stack: error.stack,
  });
};
