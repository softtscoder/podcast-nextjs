import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Sparkle from "@images/Vectors/Sparkle.png";

const Reviews = () => {
  return (
    <Box
      component="section"
      sx={{
        padding: "140px",
        bgcolor: "aliceBlue.main",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: "60px",
            fontWeight: "bold",
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              textAlign: "center",
              left: -95,
              top: -60,
            }}
          >
            <Image height="100px" width="100px" src={Sparkle} alt="bn" />
          </Box>
          What our listeners say
        </Typography>
      </Box>
      <Typography
        sx={{
          fontSize: "23px",
          fontWeight: "medium",
          textAlign: "center",
        }}
      >
        Their experience throughout every platform
      </Typography>
    </Box>
  );
};

export default Reviews;
