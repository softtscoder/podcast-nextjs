import * as React from "react";
import type { GetServerSideProps, NextPage } from "next";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper";
import Image from "next/image";
import Vector010 from "@images/Vectors/Vector010.png";
import Vector011 from "@images/Vectors/Vector011.png";
import Scribble from "@images/Vectors/Scribble.png";
import GooglePodcast from "@images/BrandIcons/GooglePodcast.png";
import Spotify from "@images/BrandIcons/Spotify.png";
import Youtube from "@images/BrandIcons/Youtube.png";
import Illustration001 from "@images/Illustration/Illustration001.png";
import Illustration002 from "@images/Illustration/Illustration002.png";
import ShadowButton from "@components/Custom/ShadowButton";
import { SiGooglepodcasts, SiSpotify, SiYoutube } from "react-icons/si";
import ComposedLink from "@components/Custom/ComposedLink";
import "swiper/css/free-mode";
import "swiper/css";

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {}, // will be passed to the page component as props
  };
};

const Home: NextPage = () => {
  const podcast = {
    title: "Technology",
    imageURL:
      "https://i.ibb.co/TgHFqFs/microphone-for-audio-record-or-podcast-concept-single-microphone-on-dark-shadow-background-with-copy.jpg",
    googlePodcastURL: "nothing",
    youtubeURL: "nothing",
    spotifyURL: "nothing",
  };

  return (
    <Container
      maxWidth={false}
      sx={{
        p: "0 !important",
      }}
    >
      <Grid
        container
        component="section"
        sx={{
          alignItems: "center",
          justifyContent: "space-between",
          bgcolor: "champagne.main",
        }}
      >
        <Grid item xs={3} sx={{ display: "flex", alignItems: "center" }}>
          <Image width="300px" height="400px" src={Vector010} alt="Image-alt" />
        </Grid>
        <Grid item xs={6} sx={{ textAlign: "center" }}>
          <Typography
            variant="h1"
            component="h1"
            sx={{ fontSize: "90px", fontWeight: "bold" }}
          >
            Your Daily
          </Typography>
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: "90px",
              fontWeight: "bold",
              lineHeight: "0.7",
              color: "vermillion.main",
            }}
          >
            Podcast
          </Typography>
          <Typography
            sx={{ fontSize: "16px", fontWeight: "medium", my: "40px" }}
          >
            We cover all kinds of categories and <br /> a weekly special guest.
          </Typography>
          <ShadowButton sx={{ height: "65px", width: "180px" }}>
            SUBSCRIBE
          </ShadowButton>
        </Grid>
        <Grid item xs={3}>
          <Box sx={{ display: "flex", justifyContent: "end", px: "60px" }}>
            <Image
              layout="fixed"
              width="150px"
              height="215px"
              src={Vector011}
              alt="Image-alt"
            />
          </Box>
        </Grid>
      </Grid>
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
          {new Array(10).fill(podcast)?.map((podcast: any, index: number) => {
            return (
              <SwiperSlide key={index + 400}>
                <Paper
                  sx={{
                    height: "340px",
                    width: "340px",
                    backgroundImage: `url(${podcast.imageURL})`,
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
                    <ComposedLink to={podcast.googlePodcastURL}>
                      <SiGooglepodcasts
                        style={{ fontSize: "24px", color: "#fff" }}
                      />
                    </ComposedLink>
                    <ComposedLink to={podcast.spotifyURL}>
                      <SiSpotify style={{ fontSize: "24px", color: "#fff" }} />
                    </ComposedLink>
                    <ComposedLink to={podcast.youtubeURL}>
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
      <Box
        component="section"
        sx={{
          position: "absolute",
          mt: "-78px",
          left: "45%",
          right: 0,
        }}
      >
        <Image height="150px" width="150px" src={Scribble} alt="bn" />
      </Box>
      <Box
        component="section"
        sx={{
          py: "80px",
        }}
      >
        <Typography
          sx={{
            fontSize: "60px",
            fontWeight: "bold",
            textAlign: "center",
            my: "60px",
          }}
        >
          Talk. Listen. Get inspired <br /> by every minute of it.
        </Typography>
        <Grid container>
          <Grid item xs={6} sx={{ padding: 12 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image height={275} width={275} src={Illustration001} alt="asv" />
            </Box>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "medium",
                mt: "40px",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ac ultrices odio.
            </Typography>
          </Grid>
          <Grid item xs={6} sx={{ padding: 12 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image height={275} width={275} src={Illustration002} alt="asv" />
            </Box>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "medium",
                mt: "40px",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ac ultrices odio.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Home;