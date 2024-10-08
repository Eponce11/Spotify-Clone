import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Context, MockContext } from "../../config/context.config";
import type { ExpressRouteFunction } from "../../common/types";
import {
  loginValidator,
  registerValidator,
  emailValidator,
} from "./validation";
import { generateToken } from "../../functions/token.functions";

export const register = (ctx: Context | MockContext): ExpressRouteFunction => {
  return async (req: Request, res: Response) => {
    const { username, email, password } = req.body;
    const dob = "00-17-02"

    const errors = await registerValidator({ ...req.body, dob }, ctx);
    if (errors) return res.status(400).json(errors);

    const date = new Date();

    try {
      const hashedPassword = await bcrypt.hash(password, 10);

      const newUserData = {
        username,
        email,
        password: hashedPassword,
        dob: date,
      };

      const newUser = await ctx.prisma.user.create({ data: newUserData });

      const accessToken = await generateToken({ id: newUser.id }, "ACCESS");
      const refreshToken = await generateToken({ id: newUser.id }, "REFRESH");

      await ctx.prisma.user.update({
        where: {
          id: newUser.id,
        },
        data: {
          refreshToken: refreshToken,
        },
      });

      return res
        .cookie("jwt", refreshToken, {
          httpOnly: true,
          maxAge: 24 * 60 * 60 * 1000,
          sameSite: "none",
          secure: true,
        })
        .json({
          id: newUser.id,
          username: newUser.username,
          token: accessToken,
        });
    } catch (err: any) {
      console.log(err);
      return res.sendStatus(400);
    }
  };
};

export const login = (ctx: Context | MockContext): ExpressRouteFunction => {
  return async (req: Request, res: Response) => {
    const user = await loginValidator(req.body, ctx);
    if (!user) return res.status(400).json({ error: "Invalid Credentials" });

    try {
      const accessToken = await generateToken({ id: user.id }, "ACCESS");
      const refreshToken = await generateToken({ id: user.id }, "REFRESH");

      await ctx.prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          refreshToken: refreshToken,
        },
      });

      return res
        .cookie("jwt", refreshToken, {
          httpOnly: true,
          maxAge: 24 * 60 * 60 * 1000,
          sameSite: "none",
          secure: true,
        })
        .json({
          id: user.id,
          username: user.username,
          token: accessToken,
        });
    } catch (err: any) {
      console.log(err);
      return res.sendStatus(400);
    }
  };
};

export const handleRefreshToken = (
  ctx: Context | MockContext
): ExpressRouteFunction => {
  return async (req: Request, res: Response) => {
    try {
      const cookies = req.cookies;
      if (!cookies?.jwt) return res.sendStatus(401);
      const refreshToken = cookies.jwt;
      const user = await ctx.prisma.user.findFirst({ where: { refreshToken } });
      if (!user) return res.sendStatus(403);
      const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET || null;
      if (!refreshTokenSecret) return res.sendStatus(500);
      jwt.verify(
        refreshToken,
        refreshTokenSecret,
        async (err: any, decoded: any) => {
          if (err || user.id !== decoded.id) return res.sendStatus(403);
          const accessToken = await generateToken({ id: user.id }, "ACCESS");
          return res.json({ accessToken });
        }
      );
    } catch (err: any) {
      console.log(err);
      return res.sendStatus(400);
    }
  };
};

export const registerEmailValidation = (
  ctx: Context | MockContext
): ExpressRouteFunction => {
  return async (req: Request, res: Response) => {
    const { email } = req.body;

    if (!emailValidator(email)) return res.sendStatus(400);

    const emailUsed = await ctx.prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (emailUsed) return res.sendStatus(400);

    return res.json({ Msg: "Valid" });
  };
};
