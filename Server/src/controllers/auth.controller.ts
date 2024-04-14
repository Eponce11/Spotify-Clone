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

type TokenType = "ACCESS" | "REFRESH";

const generateToken = (payload: { id: string }, tokenType: TokenType): any => {
  if (tokenType === "ACCESS") {
    const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;
    if (!accessTokenSecret) return null;
    return jwt.sign(payload, accessTokenSecret, { expiresIn: "15m" });
  }
  if (tokenType === "REFRESH") {
    const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET;
    if (!refreshTokenSecret) return null;
    return jwt.sign(payload, refreshTokenSecret, { expiresIn: "1d" });
  }
  return null;
};
