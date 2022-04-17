import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@utils/prisma";
import { PodcastCategory } from "@prisma/client";

interface iResponse {
  success?: boolean;
  message?: string;
  data?: PodcastCategory | null;
}

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse<iResponse>
) {
  const { method } = req;
  const { categoryId } = req.query;

  //   check if category id can be converted to a number
  if (isNaN(Number(categoryId))) {
    res.status(400).json({
      success: false,
      message: "Invalid Podcast Category Id",
    });
    return;
  }

  //   use switch to handle different request methods using try-catch
  switch (method) {
    case "GET":
      const category: PodcastCategory | null =
        await prisma.podcastCategory.findUnique({
          where: {
            id: Number(categoryId),
          },
        });
      if (category) {
        res.json({ success: true, data: category });
      } else {
        res.status(400).json({
          success: false,
          message: "Podcast Category not found",
        });
      }
      break;

    case "PATCH":
      try {
        const result: PodcastCategory = await prisma.podcastCategory.update({
          where: {
            id: Number(categoryId),
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
        const result: PodcastCategory = await prisma.podcastCategory.delete({
          where: {
            id: Number(categoryId),
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
