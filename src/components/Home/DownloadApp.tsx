import React from "react";
import { Box, Typography } from "@mui/material";
import ShadowButton from "@components/Custom/ShadowButton";
import Vector008 from "@images/Vectors/Vector008.png";
import Illustration003 from "@images/Illustration/Illustration003.png";
import Illustration004 from "@images/Illustration/Illustration004.png";
import Image from "next/image";
import ComposedLink from "@components/Custom/ComposedLink";
import { SiGooglepodcasts, SiSpotify, SiYoutube } from "react-icons/si";

const DownloadApp = () => {
  return (
    <Box
      component="section"
      sx={{
        paddingTop: "80px",
        bgcolor: "aliceBlue.main",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "60px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          component="span"
          sx={{ position: "absolute", bottom: -450, left: -85 }}
        >
          <Image height="960px" width="500px" src={Illustration003} alt="sdv" />
        </Box>
        <Box
          component="span"
          sx={{ position: "absolute", bottom: -145, right: -260 }}
        >
          <Image height="700px" width="580px" src={Illustration004} alt="sdv" />
        </Box>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "bold",
            padding: "3px 6px",
            color: "vermillion.main",
            border: "1px solid",
            borderColor: "vermillion.main",
          }}
        >
          BETA
        </Typography>
        <Typography
          sx={{
            fontSize: "60px",
            fontWeight: "bold",
            marginTop: "20px",
            marginBottom: "-20px",
          }}
        >
          Available now
        </Typography>
        <Typography
          sx={{
            fontSize: "60px",
            fontWeight: "bold",
          }}
        >
          Pod of Cast App
        </Typography>
        <Typography
          sx={{
            fontSize: "22.65px",
            fontWeight: "medium",
            color: "davysGrey.main",
            marginTop: "28px",
          }}
        >
          We just launched our podcast app!
        </Typography>
        <ShadowButton
          sx={{
            width: "210px",
            height: "60px",
            marginTop: "140px",
            position: "relative",
          }}
        >
          <Box
            component="span"
            sx={{ position: "absolute", top: -35, right: -35 }}
          >
            <Image height="60px" width="60px" src={Vector008} alt="sdv" />
          </Box>
          DOWNLOAD NOW
        </ShadowButton>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "medium",
            marginTop: "24px",
          }}
        >
          Content also available on:
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 3,
            marginTop: "10px",
            marginBottom: "50px",
          }}
        >
          <ComposedLink to={"/sd"}>
            <SiGooglepodcasts style={{ fontSize: "24px", color: "#000" }} />
          </ComposedLink>
          <ComposedLink to={"/xb"}>
            <SiSpotify style={{ fontSize: "24px", color: "#000" }} />
          </ComposedLink>
          <ComposedLink to={"/rdgr"}>
            <SiYoutube style={{ fontSize: "24px", color: "#000" }} />
          </ComposedLink>
        </Box>
      </Box>
    </Box>
  );
};

export default DownloadApp;
