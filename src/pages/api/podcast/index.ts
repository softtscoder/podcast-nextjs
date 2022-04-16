import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@utils/prisma";
import iPodcast from "@interfaces/iPodcast";

interface iResponse {
  success?: boolean;
  message?: string;
  data?: iPodcast[] | iPodcast;
}

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse<iResponse>
) {
  const { method } = req;
  switch (method) {
    case "GET":
      const podcast = await prisma.podcast.findMany();
      res.json({ success: true, data: podcast });
      break;

    case "POST":
      try {
        const result: iPodcast = await prisma.podcast.create({
          data: req.body,
        });

        res.json({ success: true, data: result });
      } catch (error: any) {
        res.json({
          success: false,
          message: error.message,
        });
      }
      break;

    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
