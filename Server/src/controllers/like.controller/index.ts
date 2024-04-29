import { Request, Response } from "express";
import { ExpressRouteFunction } from "../../common/types";
import { Context, MockContext } from "../../config/context.config";
import { createSong } from "../song.controller";

export const createLike = (ctx: Context | MockContext): ExpressRouteFunction => {
  return async (req: Request, res: Response) => {
    try {
      const { spotifyId, userId } = req.body;
      const song = await createSong(ctx, { spotifyId });
      const newLike = await ctx.prisma.like.create({ 
        data: {
          songId: song.id,
          userId: userId
        }
      })
      return res.json(newLike)
    } catch (err: any) {
      console.log(err)
      return res.sendStatus(400);
    }
  }
}