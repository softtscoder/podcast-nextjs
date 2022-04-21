import * as React from "react";
import type { GetStaticProps, NextPage } from "next";
import { PodcastCategory } from "@prisma/client";
import prisma from "@utils/prisma";
import Scribble from "@components/Custom/Scribble";
import ScribbleRed from "@components/Custom/ScribbleRed";
import Banner from "@components/Home/Banner";
import PodcastTypes from "@components/Home/PodcastTypes";
import Promotional from "@components/Home/Promotional";
import Reviews from "@components/Home/Reviews";
import Benefits from "@components/Home/Benefits";
import RecentEpisodes from "@components/Home/RecentEpisodes";
import Sponsor from "@components/Home/Sponsor";

export const getStaticProps: GetStaticProps = async (context) => {
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

      <ScribbleRed />

      {/* promotional */}
      <Promotional />

      <Scribble />

      {/* reviews */}
      <Reviews />

      <Scribble />

      {/* benefits */}
      <Benefits />

      <Scribble />

      {/* recent episodes */}
      <RecentEpisodes />

      <Scribble />

      {/* sponsor */}
      <Sponsor />

      {/* end of home */}
    </React.Fragment>
  );
};

export default Home;
