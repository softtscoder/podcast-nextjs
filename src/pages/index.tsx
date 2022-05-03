import * as React from "react";
import type { GetStaticProps, NextPage } from "next";
import Scribble from "@components/Custom/Scribble";
import ScribbleRed from "@components/Custom/ScribbleRed";
import Banner from "@components/Home/Banner";
import PodcastTypes from "@components/Home/PodcastTypes";
import Promotional from "@components/Home/Promotional";
import Reviews from "@components/Home/Reviews";
import Benefits from "@components/Home/Benefits";
import RecentEpisodes from "@components/Home/RecentEpisodes";
import Sponsor from "@components/Home/Sponsor";
import ArticleNews from "@components/Home/ArticleNews";
import DownloadApp from "@components/Home/DownloadApp";

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {}, // will be passed to the page component as props
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 1, // In seconds
  };
};

const Home: NextPage = () => {
  return (
    <React.Fragment>
      {/* banner */}
      <Banner />

      {/* podcast types */}
      <PodcastTypes />

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

      <Scribble />

      {/* article and news */}
      <ArticleNews />

      <ScribbleRed />

      {/* app downloads */}
      <DownloadApp />

      {/* end of home */}
    </React.Fragment>
  );
};

export default Home;
