import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@utils/prisma";
import { PodcastCatagory } from "@prisma/client";

interface iResponse {
  success?: boolean;
  message?: string;
  data?: PodcastCatagory | null;
}

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse<iResponse>
) {
  const { method } = req;
  const { catagoryId } = req.query;

  //   check if catagory id can be converted to a number
  if (isNaN(Number(catagoryId))) {
    res.status(400).json({
      success: false,
      message: "Invalid Podcast Catagory Id",
    });
    return;
  }

  //   use switch to handle different request methods using try-catch
  switch (method) {
    case "GET":
      const catagory: PodcastCatagory | null =
        await prisma.podcastCatagory.findUnique({
          where: {
            id: Number(catagoryId),
          },
        });
      if (catagory) {
        res.json({ success: true, data: catagory });
      } else {
        res.status(400).json({
          success: false,
          message: "Podcast Catagory not found",
        });
      }
      break;

    case "PATCH":
      try {
        const result: PodcastCatagory = await prisma.podcastCatagory.update({
          where: {
            id: Number(catagoryId),
          },
          data: req.body,
        });
        res.json({ success: true, data: result });
      } catch (error: any) {
        res.status(400).json({
          success: false,
          message: error.message,
        });
      }
      break;

    case "DELETE":
      try {
        const result: PodcastCatagory = await prisma.podcastCatagory.delete({
          where: {
            id: Number(catagoryId),
          },
        });
        res.json({ success: true, data: result });
      } catch (error: any) {
        res.status(400).json({
          success: false,
          message: error.message,
        });
      }
      break;

    default:
      res.setHeader("Allow", ["GET", "PATCH", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
