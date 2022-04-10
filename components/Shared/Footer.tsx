import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Logo from "@/images/PodcastLogo.png";
import GPodcast from "@/images/footer/GPodcasts.png";
import Spotify from "@/images/footer/Spotify.png";
import YouTube from "@/images/footer/YouTube.png";
import { FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";

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
    <Grid
      container
      sx={{ px: "140px", py: "80px", justifyContent: "space-between" }}
    >
      <Grid item xs={3}>
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
        <Typography sx={{ fontSize: "14px", fontWeight: "medium", my: "40px" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
              <Grid key={`footerNav-${index}`} item xs={5} sx={{ mb: "20px" }}>
                <Typography sx={{ fontSize: "16px", fontWeight: "medium" }}>
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
        <Box>
          <Image
            width="122px"
            height="22px"
            src={GPodcast}
            alt="Google-Podcast-logo"
          />
          <Image width="80px" height="22px" src={Spotify} alt="Spotify-logo" />
          <Image width="94px" height="22px" src={YouTube} alt="YouTube-logo" />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Footer;
