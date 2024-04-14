import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { Context, MockContext } from "../config/context.config";

type ExpressRouteFunction = (
  req: Request,
  res: Response
) => void | Promise<void>;


export const register = (ctx: Context | MockContext): ExpressRouteFunction => {
  return async (req: Request, res: Response) => {
    try {
      const newUser = await ctx.prisma.user.create({ data: req.body });
      res.json(newUser);
    } catch (err: any) {
      res.sendStatus(400);
    }
  };
};
