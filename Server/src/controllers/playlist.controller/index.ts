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
      const allUserPlaylists = await ctx.prisma.playlist.findMany({
        where: {
          userId: Number(userId),
        },
      });
      const newPlaylistName = `My Playlist #${allUserPlaylists.length + 1}`;
      const newPlaylist = await ctx.prisma.playlist.create({
        data: {
          name: newPlaylistName,
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
      res.json(playLists);
    } catch (err: any) {
      console.log(err);
      return res.sendStatus(400);
    }
  };
};

export const getUserAndSpotifyPlaylist = (
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
      const user = await ctx.prisma.user.findFirst({
        where: {
          id: Number(_userId),
        },
        include: {
          spotifyPlaylistorAlbums: true,
        },
      });

      let allPlaylists;
      if (user) {
        allPlaylists = [...playLists, ...user.spotifyPlaylistorAlbums];
      } else {
        allPlaylists = [...playLists];
      }
      console.log(allPlaylists);
      res.json(allPlaylists);
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
        include: {
          songs: true,
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

      const foundSong = await ctx.prisma.song.findFirst({
        where: {
          spotifyId: spotifyId,
        },
      });

      const foundSongId = foundSong ? foundSong.id : 0;

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
      res.json({ msg: "Success" });
    } catch (err: any) {
      console.log(err);
      return res.sendStatus(400);
    }
  };
};

export const addSpotifyPlaylistOrAlbumToLibrary = (
  ctx: Context | MockContext
): ExpressRouteFunction => {
  return async (req: Request, res: Response) => {
    try {
      const { userId, spotifyId, type } = req.body;

      console.log(req.body);

      const foundSpotifyPlaylist =
        await ctx.prisma.spotifyPlaylistOrAlbum.findFirst({
          where: {
            spotifyId: spotifyId,
          },
        });

      const foundSpotifyPlaylistId = foundSpotifyPlaylist
        ? foundSpotifyPlaylist.id
        : 0;

      await ctx.prisma.user.update({
        where: {
          id: userId,
        },
        data: {
          spotifyPlaylistorAlbums: {
            connectOrCreate: [
              {
                create: {
                  spotifyId: spotifyId,
                  type: type,
                },
                where: {
                  id: foundSpotifyPlaylistId,
                },
              },
            ],
          },
        },
      });

      res.json({ msg: "Success" });
    } catch (err: any) {
      console.log(err);
      return res.sendStatus(400);
    }
  };
};

export const removeSpotifyPlaylistFromLibrary = (
  ctx: Context | MockContext
): ExpressRouteFunction => {
  return async (req: Request, res: Response) => {
    try {
      const { userId, collectionId } = req.body;
      await ctx.prisma.user.update({
        where: {
          id: userId,
        },
        data: {
          spotifyPlaylistorAlbums: {
            disconnect: [{ id: collectionId }],
          },
        },
      });

      res.json({ Msg: "Success" });
    } catch (err: any) {
      console.log(err);
      return res.sendStatus(400);
    }
  };
};

export const deleteOwnPlaylist = (
  ctx: Context | MockContext
): ExpressRouteFunction => {
  return async (req: Request, res: Response) => {
    try {
      const { playlistId } = req.body;
      await ctx.prisma.playlist.delete({
        where: {
          id: playlistId,
        },
      });
      res.json({ Msg: "Success" });
    } catch (err: any) {
      console.log(err);
      return res.sendStatus(400);
    }
  };
};

export const editOwnPlaylist = (
  ctx: Context | MockContext
): ExpressRouteFunction => {
  return async (req: Request, res: Response) => {
    try {
      const { playlistId, name, description } = req.body;
      await ctx.prisma.playlist.update({
        where: {
          id: playlistId,
        },
        data: {
          name: name,
          description: description,
        },
      });
      res.json({ Msg: "Success" });
    } catch (err: any) {
      console.log(err);
      return res.sendStatus(400);
    }
  };
};

export const removeSongFromOwnPlaylist = (
  ctx: Context | MockContext
): ExpressRouteFunction => {
  return async (req: Request, res: Response) => {
    try {
      const { playlistId, prismaId } = req.body;
      await ctx.prisma.playlist.update({
        where: {
          id: playlistId,
        },
        data: {
          songs: {
            disconnect: [{ id: prismaId }],
          },
        },
      });
      console.log(req.body);
      res.json({ Msg: "Success" });
    } catch (err: any) {
      console.log(err);
      return res.sendStatus(400);
    }
  };
};
