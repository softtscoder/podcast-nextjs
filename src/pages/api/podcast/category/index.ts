import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@utils/prisma";
import { PodcastCategory } from "@prisma/client";

interface iResponse {
  success?: boolean;
  message?: string;
  data?: PodcastCategory | PodcastCategory[];
}

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse<iResponse>
) {
  const { method } = req;
  switch (method) {
    case "GET":
      const podcastCategory: PodcastCategory[] =
        await prisma.podcastCategory.findMany();
      res.json({ success: true, data: podcastCategory });
      break;

    case "POST":
      try {
        const result: PodcastCategory = await prisma.podcastCategory.create({
          data: req.body,
        });
        res.json({ success: true, data: result });
      } catch (error: any) {
        res.json({ success: false, message: error.message });
      }
      break;

    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
