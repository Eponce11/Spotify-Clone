import { Application, Request, Response } from "express";
import { ExpressRouteFunction } from "../../common/types";
import { Context, MockContext } from "../../config/context.config";


export const createSong = async (ctx: Context | MockContext, data: { spotifyId: string }): Promise<any> => {
  try {
    const foundSong = await ctx.prisma.song.findFirst({ where: data });
    if (foundSong) return foundSong;
    const newSong = await ctx.prisma.song.create({ data })
    return newSong;
  } catch (err: any) {
    console.log(err);
    throw new Error
  }
}