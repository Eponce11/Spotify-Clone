import { Application } from "express";
import { createLike } from "../controllers/like.controller";
import { Context, MockContext } from "../config/context.config";

const baseLikeUrl: string = "/api/like";

const likeRoutes = (app: Application, database: Context | MockContext) => {
  app.post(`${baseLikeUrl}/create`, createLike(database));
};

export default likeRoutes;
