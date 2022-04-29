import React from "react";
import ShadowButton from "@components/Custom/ShadowButton";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Vector010 from "@images/Vectors/Vector010.png";
import Vector011 from "@images/Vectors/Vector011.png";
{
  /*
   */
}

const Banner = () => {
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "champagne.main",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          right: 0,
          display: { xs: "none", md: "block" },
        }}
      >
        <Image width="150px" height="215px" src={Vector011} alt="Image-alt" />
      </Box>
      <Box
        sx={{
          position: "absolute",
          left: 0,
          display: { xs: "none", md: "block" },
        }}
      >
        <Image width="300px" height="400px" src={Vector010} alt="Image-alt" />
      </Box>
      <Typography
        variant="h1"
        component="h1"
        sx={{
          fontSize: { xs: "40px", md: "90px" },
          fontWeight: "bold",
          mt: { xs: "20px", md: "60px" },
          textAlign: "center",
        }}
      >
        Your Daily
      </Typography>
      <Typography
        variant="h1"
        component="h1"
        sx={{
          fontSize: { xs: "40px", md: "90px" },
          fontWeight: "bold",
          lineHeight: "0.7",
          color: "vermillion.main",
          textAlign: "center",
        }}
      >
        Podcast
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: "14px", md: "16px" },
          fontWeight: "medium",
          my: { xs: "20px", md: "40px" },
          textAlign: "center",
        }}
      >
        We cover all kinds of categories and <br /> a weekly special guest.
      </Typography>
      <ShadowButton
        sx={{
          height: { xs: "50px", md: "65px" },
          width: "180px",
          mt: { xs: 0, md: "60px" },
        }}
      >
        SUBSCRIBE
      </ShadowButton>
    </Box>
  );
};

export default Banner;
