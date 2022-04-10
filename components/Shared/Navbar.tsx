import React from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import Image from "next/image";
import Logo from "@/images/PodcastLogo.png";
import ExpandCircleDownOutlinedIcon from "@mui/icons-material/ExpandCircleDownOutlined";

const Navbar = () => {
  return (
    <AppBar
      position="sticky"
      sx={{
        background: "#F7EDE888",
        backdropFilter: "blur(0.3rem)",
        boxShadow: "none",
        height: "6rem",
      }}
    >
      <Toolbar
        variant="dense"
        component="nav"
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          my: "1.6rem",
          mx: "8rem",
        }}
      >
        <Box sx={{ mr: "8rem" }}>
          <Image width="74px" height="74px" src={Logo} alt="Brand-logo" />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexGrow: 1,
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ fontSize: "16px", fontWeight: "bold", mr: "3.5rem" }}
          >
            Episodes
          </Typography>
          <Typography
            sx={{ fontSize: "16px", fontWeight: "bold", mr: "3.5rem" }}
          >
            About
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
            }}
          >
            More
            <ExpandCircleDownOutlinedIcon sx={{ height: "0.9rem" }} />
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Button
            variant="outlined"
            color="black"
            sx={{
              height: "2.7rem",
              width: "12rem",
              borderRadius: "0.6rem",
              border: "0.15rem solid black",
              fontSize: "14px",
              fontWeight: "bold",
              mr: "20px",
            }}
          >
            RECENT EPISODES
          </Button>
          <Button
            variant="contained"
            color="black"
            sx={{
              height: "2.7rem",
              width: "10rem",
              borderRadius: "0.6rem",
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            SUBSCRIBE
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
