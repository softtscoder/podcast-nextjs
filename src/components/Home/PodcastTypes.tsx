import React from "react";
import { NextPage } from "next";
import Image from "next/image";
import { Box, Grid, Paper, Typography } from "@mui/material";
import Slider from "react-slick";
import ComposedLink from "@components/Custom/ComposedLink";
import { SiGooglepodcasts, SiSpotify, SiYoutube } from "react-icons/si";
import GooglePodcast from "@images/BrandIcons/GooglePodcast.png";
import Spotify from "@images/BrandIcons/Spotify.png";
import Youtube from "@images/BrandIcons/Youtube.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const categoryData = [
  {
    title: "Test Category",
    cover:
      "https://i.ibb.co/TgHFqFs/microphone-for-audio-record-or-podcast-concept-single-microphone-on-dark-shadow-background-with-copy.jpg",
    googlePodcastUrl: "https://i.ibb.co/cwYT56L/pngegg.png",
    spotifyUrl: "https://i.ibb.co/cwYT56L/pngegg.png",
    youtubeUrl: "https://i.ibb.co/cwYT56L/pngegg.png",
  },
  {
    title: "Test Category",
    cover: "https://i.ibb.co/QbKrZqZ/besustainable-podcast-bg.jpg",
    googlePodcastUrl: "https://i.ibb.co/cwYT56L/pngegg.png",
    spotifyUrl: "https://i.ibb.co/cwYT56L/pngegg.png",
    youtubeUrl: "https://i.ibb.co/cwYT56L/pngegg.png",
  },
  {
    title: "Test Category",
    cover:
      "https://i.ibb.co/TgHFqFs/microphone-for-audio-record-or-podcast-concept-single-microphone-on-dark-shadow-background-with-copy.jpg",
    googlePodcastUrl: "https://i.ibb.co/cwYT56L/pngegg.png",
    spotifyUrl: "https://i.ibb.co/cwYT56L/pngegg.png",
    youtubeUrl: "https://i.ibb.co/cwYT56L/pngegg.png",
  },
  {
    title: "Test Category",
    cover: "https://i.ibb.co/QbKrZqZ/besustainable-podcast-bg.jpg",
    googlePodcastUrl: "https://i.ibb.co/cwYT56L/pngegg.png",
    spotifyUrl: "https://i.ibb.co/cwYT56L/pngegg.png",
    youtubeUrl: "https://i.ibb.co/cwYT56L/pngegg.png",
  },
  {
    title: "Test Category",
    cover:
      "https://i.ibb.co/TgHFqFs/microphone-for-audio-record-or-podcast-concept-single-microphone-on-dark-shadow-background-with-copy.jpg",
    googlePodcastUrl: "https://i.ibb.co/cwYT56L/pngegg.png",
    spotifyUrl: "https://i.ibb.co/cwYT56L/pngegg.png",
    youtubeUrl: "https://i.ibb.co/cwYT56L/pngegg.png",
  },
  {
    title: "Test Category",
    cover: "https://i.ibb.co/QbKrZqZ/besustainable-podcast-bg.jpg",
    googlePodcastUrl: "https://i.ibb.co/cwYT56L/pngegg.png",
    spotifyUrl: "https://i.ibb.co/cwYT56L/pngegg.png",
    youtubeUrl: "https://i.ibb.co/cwYT56L/pngegg.png",
  },
];

const PodcastTypes: NextPage = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3.5,
    slidesToScroll: 0.25,
    autoplay: true,
    pauseOnHover: true,
    speed: 10000,
    autoplaySpeed: 0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          speed: 300,
          infinite: true,
          dots: true,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          speed: 300,
          autoplay: false,
          dots: true,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 300,
          autoplay: false,
          dots: true,
          swipeToSlide: true,
        },
      },
    ],
  };

  return (
    <Box
      component="section"
      sx={{
        bgcolor: "champagne.main",
        py: "80px",
      }}
    >
      <Box sx={{ mx: 5 }}>
        <Slider {...settings}>
          {categoryData?.map((podcast: any, index: number) => {
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
                    {podcast?.googlePodcast && (
                      <ComposedLink to={podcast.googlePodcastUrl}>
                        <SiGooglepodcasts
                          style={{ fontSize: "24px", color: "#fff" }}
                        />
                      </ComposedLink>
                    )}
                    {podcast?.spotifyUrl && (
                      <ComposedLink to={podcast.spotifyUrl}>
                        <SiSpotify
                          style={{ fontSize: "24px", color: "#fff" }}
                        />
                      </ComposedLink>
                    )}
                    {podcast?.youtubeUrl && (
                      <ComposedLink to={podcast.youtubeUrl}>
                        <SiYoutube
                          style={{ fontSize: "24px", color: "#fff" }}
                        />
                      </ComposedLink>
                    )}
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
      <Box
        sx={{
          mx: { xs: "40px", md: "140px" },
          my: "100px",
          borderTop: "1px solid black",
          borderBottom: "1px solid black",
          height: { md: "120px" },
          py: { xs: "30px", md: 0 },
        }}
      >
        <Grid container rowGap={2} sx={{ height: 1 }}>
          <Grid
            item
            xs={12}
            md={3}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: "22.6px",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Supported by:
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
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
            xs={12}
            md={3}
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
            xs={12}
            md={3}
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
