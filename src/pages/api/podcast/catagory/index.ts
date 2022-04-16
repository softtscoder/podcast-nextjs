import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@utils/prisma";
// import iPodcastCatagory from "@interfaces/iPodcastCatagory";

interface iResponse {
  success?: boolean;
  message?: string;
  data?: any;
}

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse<iResponse>
) {
  const { method } = req;
  switch (method) {
    case "GET":
      const podcastCatagory = await prisma.podcastCatagory.findMany();
      res.json({ success: true, data: podcastCatagory });
      break;

    case "POST":
      try {
        const result: any = await prisma.podcastCatagory.create({
          data: req.body,
        });
        res.json({ success: true, data: result });
      } catch (error: any) {
        res.json({ success: false, message: error.message });
      }
      break;

    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
