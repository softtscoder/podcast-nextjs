import React from "react";
import Image from "next/image";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import Vector009 from "@images/Vectors/Vector009.png";
import Vector012 from "@images/Vectors/Vector012.png";
import SpotifyIcon from "@images/BrandIcons/SpotifyIcon.png";
import Illustration001 from "@images/Illustration/Illustration001.png";
import Illustration002 from "@images/Illustration/Illustration002.png";

const Promotional = () => {
  return (
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
      <Box
        sx={{
          position: "relative",
          textAlign: "center",
          padding: "40px",
          bgcolor: "champagne.main",
          mx: "140px",
          marginBottom: "80px",
        }}
      >
        <Box sx={{ position: "absolute", top: -70, right: -70 }}>
          <Image height="200px" width="200px" src={Vector009} alt="sdv" />
        </Box>
        <Typography
          sx={{
            fontSize: "95px",
            fontWeight: "bold",
            color: "vermillion.main",
            lineHeight: "0.5",
          }}
        >
          {`"`}
        </Typography>
        <Typography
          sx={{
            fontSize: "36px",
            fontWeight: "bold",
          }}
        >
          One of the best daily podcasts that <br />
          covers every topic on Spotify.
        </Typography>
        <Box
          sx={{
            mt: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Avatar
            sizes="48px"
            alt="Cindy Baker"
            src="http://placehold.jp/500x500.png"
          />
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: "medium",
            }}
          >
            John Smith,
          </Typography>
          <Image src={SpotifyIcon} alt="" height="16px" width="16px" />
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            Social Community Manager
          </Typography>
        </Box>
        <Box sx={{ position: "absolute", bottom: 30, left: -60 }}>
          <Image height="120px" width="120px" src={Vector012} alt="sdv" />
        </Box>
      </Box>
    </Box>
  );
};

export default Promotional;
