import cors from "cors";
import express, { Express } from "express";
import helmet from "helmet";
import morgan from "morgan";
import { restaurantRouter } from "./routes/restaurant.routes";
import { errorHandler, notFoundHandler } from "./utils/http";

export function createApp(): Express {
  const app = express();

  app.use(helmet());
  app.use(cors({ origin: process.env.CORS_ORIGIN?.split(",") ?? "*", credentials: false }));
  app.use(express.json({ limit: "1mb" }));
  app.use(morgan("dev"));

  app.get("/health", (_req, res) => {
    res.json({ status: "ok", uptime: process.uptime(), timestamp: new Date().toISOString() });
  });

  app.use("/api", restaurantRouter);

  app.use(notFoundHandler);
  app.use(errorHandler);

  return app;
}