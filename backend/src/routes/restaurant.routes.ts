import { Router } from "express";
import { restaurantController } from "../controllers/restaurant.controller";

export const restaurantRouter: Router = Router();

restaurantRouter.get("/home/feed", restaurantController.homeFeed);
restaurantRouter.get("/restaurants", restaurantController.list);
restaurantRouter.get("/restaurants/:id", restaurantController.detail);
restaurantRouter.get("/categories", restaurantController.categories);
restaurantRouter.get("/collections", restaurantController.collections);