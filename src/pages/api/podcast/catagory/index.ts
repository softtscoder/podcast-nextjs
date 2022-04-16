import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@utils/prisma";
import { PodcastCatagory } from "@prisma/client";

interface iResponse {
  success?: boolean;
  message?: string;
  data?: PodcastCatagory | PodcastCatagory[];
}

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse<iResponse>
) {
  const { method } = req;
  switch (method) {
    case "GET":
      const podcastCatagory: PodcastCatagory[] =
        await prisma.podcastCatagory.findMany();
      res.json({ success: true, data: podcastCatagory });
      break;

    case "POST":
      try {
        const result: PodcastCatagory = await prisma.podcastCatagory.create({
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
