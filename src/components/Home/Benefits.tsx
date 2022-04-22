import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Vector001 from "@images/Vectors/Vector001.png";
import Vector002 from "@images/Vectors/Vector002.png";
import Vector003 from "@images/Vectors/Vector003.png";
import Vector004 from "@images/Vectors/Vector004.png";
import Vector005 from "@images/Vectors/Vector005.png";
import Vector006 from "@images/Vectors/Vector006.png";
import Vector007 from "@images/Vectors/Vector007.png";
import Image from "next/image";
import ShadowButton from "@components/Custom/ShadowButton";

const benefitCards = [
  {
    image: {
      src: Vector001,
      height: "20px",
      width: "70px",
    },
    title: "Topic by Request",
    description:
      "Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod tempor.",
  },
  {
    image: {
      src: Vector002,
      height: "78px",
      width: "78px",
    },
    title: "Exclusive Content",
    description:
      "Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor.",
  },
  {
    image: {
      src: Vector005,
      height: "70px",
      width: "70px",
    },
    title: "Join the Community",
    description:
      "Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod tempor.",
  },
  {
    image: {
      src: Vector006,
      height: "70px",
      width: "70px",
    },
    title: "Livestreaming Access",
    description:
      "Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod tempor.",
  },
  {
    image: {
      src: Vector003,
      height: "70px",
      width: "70px",
    },
    title: "Exclusive Episodes & Merch",
    description:
      "Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod tempor.",
  },
  {
    image: {
      src: Vector004,
      height: "70px",
      width: "70px",
    },
    title: "And much more!",
    description:
      "Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod tempor.",
  },
];

const Benefits = () => {
  return (
    <Box
      component="section"
      sx={{
        py: "140px",
        px: { xs: "20px", md: "140px" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography
          component="div"
          sx={{
            fontSize: { xs: "40px", md: "60px" },
            fontWeight: "bold",
            textAlign: "center",
            position: "relative",
            marginTop: "40px",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              textAlign: "center",
              right: -95,
              top: -120,
              transform: "rotate(14.3deg)",
              display: { xs: "none", md: "block" },
            }}
          >
            <Image height="240px" width="240px" src={Vector007} alt="bn" />
          </Box>
          Membership benefits
        </Typography>
      </Box>
      <Typography
        sx={{
          fontSize: { xs: "18px", md: "22.65px" },
          fontWeight: "medium",
          textAlign: "center",
          mb: "100px",
        }}
      >
        Become our sponsor and get all benefits
      </Typography>
      <Grid container rowSpacing={10}>
        {benefitCards.map((benefit, index) => {
          return (
            <Grid item xs={12} md={4} key={index}>
              <Box
                sx={{
                  height: "100px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mb: "20px",
                }}
              >
                <Image
                  height={benefit?.image?.height}
                  width={benefit?.image?.width}
                  src={benefit?.image?.src}
                  alt="bn"
                />
              </Box>
              <Typography
                sx={{
                  fontSize: "22.65px",
                  fontWeight: "bold",
                  textAlign: "center",
                  pb: 1,
                }}
              >
                {benefit?.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "medium",
                  textAlign: "center",
                }}
              >
                {benefit?.description}
              </Typography>
            </Grid>
          );
        })}
      </Grid>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: "100px",
        }}
      >
        <ShadowButton
          sx={{
            height: "60px",
            width: "170px",
          }}
        >
          SEE PRICING
        </ShadowButton>
      </Box>
    </Box>
  );
};

export default Benefits;
