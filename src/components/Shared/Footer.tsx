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
    <Box sx={{ px: "140px", py: "80px" }}>
      <Grid
        container
        sx={{ pb: "140px", borderBottom: "0.5px solid #4D4D4D4D" }}
      >
        <Grid item xs={4}>
          <Box sx={{ display: "flex", alignItems: "end" }}>
            <Box sx={{ mr: "24px" }}>
              <Image width="74px" height="74px" src={Logo} alt="Brand-logo" />
            </Box>
            <Typography
              sx={{ fontSize: "12px", fontWeight: "medium", pb: "10px" }}
            >
              ©2021.
            </Typography>
          </Box>
          <Typography
            sx={{ fontSize: "14px", fontWeight: "medium", my: "40px" }}
          >
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
          </Typography>
          <Box sx={{ display: "flex" }}>
            <FaTwitter style={{ fontSize: "24px", marginRight: "25px" }} />
            <FaInstagram style={{ fontSize: "24px", marginRight: "25px" }} />
            <FaTiktok style={{ fontSize: "24px" }} />
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Grid container sx={{ justifyContent: "space-between" }}>
            {footerLinks.map((link, index) => {
              return (
                <Grid
                  key={`footerNav-${index}`}
                  item
                  xs={5}
                  sx={{ mb: "20px" }}
                >
                  <Typography
                    component={ComposedLink}
                    to={link.to}
                    sx={{
                      fontSize: "16px",
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
        <Grid item xs={4}>
          <Typography sx={{ fontSize: "16px", fontWeight: "medium" }}>
            Listen to episodes on your fav platform:
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              my: "40px",
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
            sx={{ fontSize: "16px", fontWeight: "medium", mt: "60px" }}
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
        sx={{ my: "20px", display: "flex", justifyContent: "space-between" }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Typography sx={{ fontSize: "12px", fontWeight: "medium" }}>
            ©2022. All Rights Reserved.
          </Typography>
          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: "medium",
              color: "vermillion.main",
            }}
          >
            Pod of Cast
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Typography sx={{ fontSize: "12px", fontWeight: "medium" }}>
            Terms
          </Typography>
          <CircleIcon sx={{ width: "5px" }} />
          <Typography sx={{ fontSize: "12px", fontWeight: "medium" }}>
            Privacy
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
