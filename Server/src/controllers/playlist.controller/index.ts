import { Request, Response } from "express";
import { ExpressRouteFunction } from "../../common/types";
import { Context, MockContext } from "../../config/context.config";
import { create } from "domain";

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
      if (!_userId) res.sendStatus(400);
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

export const getPlaylist = (
  ctx: Context | MockContext
): ExpressRouteFunction => {
  return async (req: Request, res: Response) => {
    try {
      const { playlistId } = req.body;
      if (!playlistId) res.sendStatus(400);
      const playlist = await ctx.prisma.playlist.findFirst({
        where: {
          id: Number(playlistId),
        },
      });
      res.json(playlist);
    } catch (err: any) {
      console.log(err);
      return res.sendStatus(400);
    }
  };
};

export const addSongToPlaylist = (
  ctx: Context | MockContext
): ExpressRouteFunction => {
  return async (req: Request, res: Response) => {
    try {
      const { spotifyId, playlistId } = req.body;

      const foundSong = await ctx.prisma.song.findFirst({ where: {
        spotifyId: spotifyId
      } })

      const foundSongId = foundSong ? foundSong.id : 0

      await ctx.prisma.playlist.update({
        where: {
          id: playlistId,
        },
        data: {
          songs: {
            connectOrCreate: [
              {
                create: {
                  spotifyId: spotifyId,
                },
                where: {
                  id: foundSongId,
                },
              },
            ],
          },
        },
      });
      res.json({ msg: "Success" })
    } catch (err: any) {
      console.log(err);
      return res.sendStatus(400);
    }
  };
};
