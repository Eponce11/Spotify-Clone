import { Request, Response } from "express";
import { ExpressRouteFunction } from "../../common/types";
import { Context, MockContext } from "../../config/context.config";

export const createPlaylist = (
  ctx: Context | MockContext
): ExpressRouteFunction => {
  return async (req: Request, res: Response) => {
    try {
      const { name, isPublic, userId } = req.body;
      const newPlaylist = await ctx.prisma.playlist.create({
        data: {
          name: name,
          isPublic: isPublic,
          userId: userId,
        },
      });
      return res.json(newPlaylist);
    } catch (err: any) {
      console.log(err);
      return res.sendStatus(400);
    }
  };
};
