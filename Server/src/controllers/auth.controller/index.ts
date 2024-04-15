import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { Context, MockContext } from "../../config/context.config";
import type { ExpressRouteFunction } from "../../common/types";
import { registerValidation } from "./validation";
import { generateToken } from "../../functions/token.functions";

export const register = (ctx: Context | MockContext): ExpressRouteFunction => {
  return async (req: Request, res: Response) => {
    const { username, email, password, dob } = req.body;

    const errors = await registerValidation(req.body, ctx);
    if (errors) return res.status(400).json(errors);

    const date = new Date(dob);

    try {
      const hashedPassword = await bcrypt.hash(password, 10);

      const newUserData = {
        username,
        email,
        password: hashedPassword,
        dob: date
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