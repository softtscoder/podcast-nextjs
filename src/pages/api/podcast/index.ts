import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@utils/prisma";
import { Podcast } from "@prisma/client";

interface iResponse {
  success?: boolean;
  message?: string;
  data?: Podcast | Podcast[];
}

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse<iResponse>
) {
  const { method } = req;
  switch (method) {
    case "GET":
      const podcast: Podcast[] = await prisma.podcast.findMany();
      res.json({ success: true, data: podcast });
      break;

    case "POST":
      try {
        const result: Podcast = await prisma.podcast.create({
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

    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
