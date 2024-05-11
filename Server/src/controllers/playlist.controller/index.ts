import { Request, Response } from "express";
import { ExpressRouteFunction } from "../../common/types";
import { Context, MockContext } from "../../config/context.config";

export const createPlaylist = (
  ctx: Context | MockContext
): ExpressRouteFunction => {
  return async (req: Request, res: Response) => {
    try {
      const { userId } = req.body;
      const newPlaylist = await ctx.prisma.playlist.create({
        data: {
          name: "somename",
          isPublic: false,
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

export const getUserPlaylists = (
  ctx: Context | MockContext
): ExpressRouteFunction => {
  return async (req: Request, res: Response) => {
    try {
      const { _userId } = req.params;
      if (!_userId) return;
      const playLists = await ctx.prisma.playlist.findMany({
        where: {
          userId: Number(_userId),
        },
      });
      console.log(playLists);
      res.json(playLists);
    } catch (err: any) {
      console.log(err);
      return res.sendStatus(400);
    }
  };
};
