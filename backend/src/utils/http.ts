import { NextFunction, Request, RequestHandler, Response } from "express";
import { ApiErrorShape } from "../types";

/** Consistent error envelope: { error: { code, message, details? } } */
export class ApiError extends Error {
  constructor(
    public statusCode: number,
    public code: string,
    message: string,
    public details?: unknown
  ) {
    super(message);
    this.name = "ApiError";
  }
}

/** Wrap async handlers so rejections reach the error middleware. */
export const asyncHandler =
  (fn: (req: Request, res: Response, next: NextFunction) => Promise<unknown>): RequestHandler =>
  (req, res, next) => {
    fn(req, res, next).catch(next);
  };

/** 404 helper — call after a lookup returned undefined. */
export function notFound(requested: string): never {
  throw new ApiError(404, "NOT_FOUND", `${requested} not found`);
}

export function errorEnvelope(code: string, message: string, details?: unknown): ApiErrorShape {
  return { error: { code, message, ...(details !== undefined ? { details } : {}) } };
}

export const notFoundHandler: RequestHandler = (req, _res, next) => {
  next(new ApiError(404, "ROUTE_NOT_FOUND", `Route ${req.method} ${req.originalUrl} not found`));
};

export const errorHandler: (err: unknown, req: Request, res: Response, _next: NextFunction) => void = (err, _req, res, _next) => {
  if (err instanceof ApiError) {
    res.status(err.statusCode).json(errorEnvelope(err.code, err.message, err.details));
    return;
  }
  const message = err instanceof Error ? err.message : "Internal server error";
  // Never leak stack traces or internal details to clients.
  res.status(500).json(errorEnvelope("INTERNAL_ERROR", message));
};