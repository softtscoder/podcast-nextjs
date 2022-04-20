import React from "react";
import { NextPage } from "next";
import Image from "next/image";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper";
import ComposedLink from "@components/Custom/ComposedLink";
import { SiGooglepodcasts, SiSpotify, SiYoutube } from "react-icons/si";
import { PodcastCategory } from "@prisma/client";
import GooglePodcast from "@images/BrandIcons/GooglePodcast.png";
import Spotify from "@images/BrandIcons/Spotify.png";
import Youtube from "@images/BrandIcons/Youtube.png";

type iProps = {
  podcastCategories: PodcastCategory[];
};

const PodcastTypes: NextPage<iProps> = ({ podcastCategories }) => {
  return (
    <Box
      component="section"
      sx={{
        bgcolor: "champagne.main",
        py: "80px",
        "& .swiper-wrapper": {
          transitionTimingFunction: "linear !important",
        },
      }}
    >
      <Swiper
        slidesPerView={4}
        spaceBetween={150}
        loop={true}
        freeMode={true}
        modules={[FreeMode, Autoplay]}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={5000}
      >
        {podcastCategories?.map((podcast: any, index: number) => {
          return (
            <SwiperSlide key={index + 400}>
              <Paper
                sx={{
                  height: "340px",
                  width: "340px",
                  backgroundImage: `url(${podcast.cover})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "end",
                    gap: "10px",
                    padding: "20px",
                  }}
                >
                  <ComposedLink to={podcast.googlePodcastUrl}>
                    <SiGooglepodcasts
                      style={{ fontSize: "24px", color: "#fff" }}
                    />
                  </ComposedLink>
                  <ComposedLink to={podcast.spotifyUrl}>
                    <SiSpotify style={{ fontSize: "24px", color: "#fff" }} />
                  </ComposedLink>
                  <ComposedLink to={podcast.youtubeUrl}>
                    <SiYoutube style={{ fontSize: "24px", color: "#fff" }} />
                  </ComposedLink>
                </Box>
                <Typography
                  sx={{
                    fontSize: "36px",
                    fontWeight: "bold",
                    color: "primary.main",
                    padding: "20px",
                  }}
                >
                  {podcast.title}
                </Typography>
              </Paper>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Box
        sx={{
          mx: "140px",
          my: "100px",
          borderTop: "1px solid black",
          borderBottom: "1px solid black",
          height: "120px",
        }}
      >
        <Grid container sx={{ height: 1 }}>
          <Grid item xs={3} sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              sx={{
                fontSize: "22.6px",
                fontWeight: "bold",
              }}
            >
              Supported by:
            </Typography>
          </Grid>
          <Grid
            item
            xs={3}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              height="35px"
              width="130px"
              src={Spotify}
              alt="podcastLogo"
            />
          </Grid>
          <Grid
            item
            xs={3}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              height="35px"
              width="200px"
              src={GooglePodcast}
              alt="podcastLogo"
            />
          </Grid>
          <Grid
            item
            xs={3}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              height="30px"
              width="125px"
              src={Youtube}
              alt="podcastLogo"
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default PodcastTypes;
