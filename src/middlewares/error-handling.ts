import { AppError } from "@/utils/AppError";
import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";

export function errorHandling(error: Error, request: Request, response: Response, _: NextFunction) {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({ message: error.message });
  }

  if (error instanceof ZodError) {
    return response.status(400).json({ message: "validation error", issues: error.format()});
  }

  return response.status(500).json({ message: "Internal server error", error: error.message });
}