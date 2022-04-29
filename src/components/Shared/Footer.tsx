import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import ComposedLink from "@components/Custom/ComposedLink";
import Logo from "@images/PodcastLogo.png";
import GPodcast from "@images/Footer/GPodcasts.png";
import Spotify from "@images/Footer/Spotify.png";
import YouTube from "@images/Footer/YouTube.png";
import AppStore from "@images/Footer/AppStore.png";
import PlayStore from "@images/Footer/PlayStore.png";
import { FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";
import CircleIcon from "@mui/icons-material/Circle";

const footerLinks = [
  { title: "About", to: "/about" },
  { title: "Episodes", to: "/episodes" },
  { title: "Testimonials", to: "/testimonials" },
  { title: "Pricing", to: "/pricing" },
  { title: "Features", to: "/features" },
  { title: "Blog", to: "/blog" },
];

const Footer = () => {
  return (
    <Box
      sx={{
        px: { xs: "20px", md: "140px" },
        pb: "40px",
        pt: { xs: "50px", md: "100px" },
      }}
    >
      <Grid
        container
        sx={{
          pb: { xs: "20px", md: "60px" },
          borderBottom: "0.5px solid",
          borderColor: "davysGrey.main",
        }}
      >
        <Grid item xs={12} md={4} sx={{ padding: "10px" }}>
          <Box sx={{ display: "flex", alignItems: "end" }}>
            <Box sx={{ mr: "24px" }}>
              <Image width="74px" height="74px" src={Logo} alt="Brand-logo" />
            </Box>
            <Typography
              sx={{
                fontSize: { xs: "10px", md: "12px" },
                fontWeight: "medium",
                pb: "10px",
              }}
            >
              ©2021.
            </Typography>
          </Box>
          <Typography
            sx={{
              fontSize: { xs: "12px", md: "14px" },
              fontWeight: "medium",
              my: { xs: "10px", md: "40px" },
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
          <Box sx={{ display: "flex", my: { xs: "25px", md: 0 } }}>
            <FaTwitter style={{ fontSize: "24px", marginRight: "25px" }} />
            <FaInstagram style={{ fontSize: "24px", marginRight: "25px" }} />
            <FaTiktok style={{ fontSize: "24px" }} />
          </Box>
        </Grid>
        <Grid item xs={12} md={4} sx={{ padding: "10px" }}>
          <Grid container sx={{ justifyContent: "space-between" }}>
            {footerLinks.map((link, index) => {
              return (
                <Grid
                  key={`footerNav-${index}`}
                  item
                  xs={5}
                  sx={{ mb: { xs: "5px", md: "20px" } }}
                >
                  <Typography
                    component={ComposedLink}
                    to={link.to}
                    sx={{
                      fontSize: { xs: "14px", md: "16px" },
                      fontWeight: "medium",
                      color: "black.main",
                      "&:hover": {
                        color: "vermillion.main",
                      },
                    }}
                  >
                    {link.title}
                  </Typography>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        <Grid item xs={12} md={4} sx={{ padding: "10px" }}>
          <Typography
            sx={{ fontSize: { xs: "14px", md: "16px" }, fontWeight: "medium" }}
          >
            Listen to episodes on your fav platform:
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              my: { xs: "30px", md: "40px" },
            }}
          >
            <Image
              width="122px"
              height="22px"
              src={GPodcast}
              alt="Google-Podcast-logo"
            />
            <Image
              width="80px"
              height="22px"
              src={Spotify}
              alt="Spotify-logo"
            />
            <Image
              width="94px"
              height="22px"
              src={YouTube}
              alt="YouTube-logo"
            />
          </Box>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              fontWeight: "medium",
              mt: { xs: "20px", md: "60px" },
            }}
          >
            App available on:
          </Typography>
          <Box
            sx={{
              mt: "20px",
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <Image
              width="30px"
              height="30px"
              src={AppStore}
              alt="Spotify-logo"
            />
            <Image
              width="30px"
              height="30px"
              src={PlayStore}
              alt="YouTube-logo"
            />
          </Box>
        </Grid>
      </Grid>
      <Box
        sx={{ mt: "10px", display: "flex", justifyContent: "space-between" }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: { md: "center" },
            gap: "10px",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Typography
            sx={{ fontSize: { xs: "10px", md: "12px" }, fontWeight: "medium" }}
          >
            ©2022. All Rights Reserved.
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "10px", md: "12px" },
              fontWeight: "medium",
              color: "vermillion.main",
            }}
          >
            Pod of Cast
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Typography
            sx={{ fontSize: { xs: "10px", md: "12px" }, fontWeight: "medium" }}
          >
            Terms
          </Typography>
          <CircleIcon sx={{ width: "5px" }} />
          <Typography
            sx={{ fontSize: { xs: "10px", md: "12px" }, fontWeight: "medium" }}
          >
            Privacy
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
