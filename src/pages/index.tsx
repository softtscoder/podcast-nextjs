import * as React from "react";
import type { GetServerSideProps, NextPage } from "next";
import { Box } from "@mui/material";
import Image from "next/image";
import Banner from "@components/Home/Banner";
import PodcastTypes from "@components/Home/PodcastTypes";
import Promotional from "@components/Home/Promotional";
import Reviews from "@components/Home/Reviews";
import Scribble from "@images/Vectors/Scribble.png";
import ScribbleBlack from "@images/Vectors/ScribbleBlack.png";
import { PodcastCategory } from "@prisma/client";
import prisma from "@utils/prisma";
import "swiper/css/free-mode";
import "swiper/css";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response: PodcastCategory[] = await prisma.podcastCategory.findMany();
  const podcastCategories = JSON.parse(JSON.stringify(response));
  return {
    props: { podcastCategories }, // will be passed to the page component as props
  };
};

type iProps = {
  podcastCategories: PodcastCategory[];
};

const Home: NextPage<iProps> = ({ podcastCategories }) => {
  return (
    <React.Fragment>
      {/* banner */}
      <Banner />

      {/* podcast types */}
      <PodcastTypes podcastCategories={podcastCategories} />

      <Box
        sx={{
          position: "absolute",
          mt: "-78px",
          left: "45%",
          right: 0,
        }}
      >
        <Image height="150px" width="150px" src={Scribble} alt="bn" />
      </Box>

      {/* promotional */}
      <Promotional />

      <Box
        sx={{
          position: "absolute",
          mt: "-78px",
          left: "45%",
          right: 0,
        }}
      >
        <Image height="150px" width="150px" src={ScribbleBlack} alt="bn" />
      </Box>

      {/* reviews */}
      <Reviews />

      {/* end of home */}
    </React.Fragment>
  );
};

export default Home;
