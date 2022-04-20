import React from "react";
import { NextPage } from "next";
import Image from "next/image";
import { Box, Grid, Paper, Typography } from "@mui/material";
import Slider from "react-slick";
import ComposedLink from "@components/Custom/ComposedLink";
import { SiGooglepodcasts, SiSpotify, SiYoutube } from "react-icons/si";
import { PodcastCategory } from "@prisma/client";
import GooglePodcast from "@images/BrandIcons/GooglePodcast.png";
import Spotify from "@images/BrandIcons/Spotify.png";
import Youtube from "@images/BrandIcons/Youtube.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type iProps = {
  podcastCategories: PodcastCategory[];
};

const PodcastTypes: NextPage<iProps> = ({ podcastCategories }) => {
  const settings = {
    infinite: true,
    slidesToShow: 3.4,
    slidesToScroll: 0.5,
    autoplay: true,
    pauseOnHover: true,
    speed: 1500,
    autoplaySpeed: 0,
    cssEase: "linear",
  };

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
      <Box sx={{ mx: 5 }}>
        <Slider {...settings}>
          {podcastCategories?.map((podcast: any, index: number) => {
            return (
              <Box key={index}>
                <Paper
                  sx={{
                    height: "350px",
                    width: "350px",
                    backgroundImage: `url(${podcast.cover})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    borderRadius: "10px",
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
              </Box>
            );
          })}
        </Slider>
      </Box>
      {/* <Swiper
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
      </Swiper> */}
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
