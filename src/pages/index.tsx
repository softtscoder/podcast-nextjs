import * as React from "react";
import type { GetServerSideProps, NextPage } from "next";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";
import Vector010 from "@images/Vectors/Vector010.png";
import Vector011 from "@images/Vectors/Vector011.png";
import Vector012 from "@images/Vectors/Vector012.png";
import ShadowButton from "@components/Custom/ShadowButton";
import { Grid } from "@mui/material";

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {}, // will be passed to the page component as props
  };
};

const Home: NextPage = () => {
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
          <Image width="50px" height="50px" src={Vector011} alt="Image-alt" />
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
              src={Vector012}
              alt="Image-alt"
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
