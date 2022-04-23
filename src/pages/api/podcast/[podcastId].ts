import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@utils/prisma";
import { Podcast } from "@prisma/client";

interface iResponse {
  success?: boolean;
  message?: string;
  data?: Podcast | null;
}

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse<iResponse>
) {
  const { method } = req;
  const { podcastId } = req.query;

  //   check if podcast id can be converted to a number
  if (isNaN(Number(podcastId))) {
    res.status(400).json({
      success: false,
      message: "Invalid Podcast Id",
    });
    return;
  }

  //   use switch to handle different request methods using try-catch
  switch (method) {
    case "GET":
      const podcast: Podcast | null = await prisma.podcast.findUnique({
        where: {
          id: Number(podcastId),
        },
      });
      if (podcast) {
        res.json({ success: true, data: podcast });
      } else {
        res.status(400).json({
          success: false,
          message: "Podcast not found",
        });
      }
      break;

    case "PATCH":
      try {
        const result: Podcast = await prisma.podcast.update({
          where: {
            id: Number(podcastId),
          },
          data: req.body,
        });
        res.json({ success: true, data: result });
      } catch (error: any) {
        res.status(400).json({
          success: false,
          message: `${error.code}: ${error.message}`,
        });
      }
      break;

    case "DELETE":
      try {
        const result: Podcast = await prisma.podcast.delete({
          where: {
            id: Number(podcastId),
          },
        });
        res.json({ success: true, data: result });
      } catch (error: any) {
        res.status(400).json({
          success: false,
          message: `${error.code}: ${error.message}`,
        });
      }
      break;

    default:
      res.setHeader("Allow", ["GET", "PATCH", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
