import React from "react";
import ShadowButton from "@components/Custom/ShadowButton";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Vector010 from "@images/Vectors/Vector010.png";
import Vector011 from "@images/Vectors/Vector011.png";

const Banner = () => {
  return (
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
        <Typography sx={{ fontSize: "16px", fontWeight: "medium", my: "40px" }}>
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
  );
};

export default Banner;
