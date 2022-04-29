import React from "react";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Logo from "@images/PodcastLogo.png";
import ExpandCircleDownOutlinedIcon from "@mui/icons-material/ExpandCircleDownOutlined";
import ShadowButton from "@components/Custom/ShadowButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setOpen(!open);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        background: "#F7EDE8E8",
        backdropFilter: "blur(10px)",
        boxShadow: "none",
        height: { sm: "3rem", md: "6rem" },
      }}
    >
      <Toolbar
        variant="dense"
        component="nav"
        sx={{
          my: { md: "1.6rem" },
          mx: { xs: "1rem", md: "8rem" },
        }}
      >
        {/* Menu Icon only for small device */}
        <Box sx={{ position: "relative", width: 0 }}>
          <IconButton
            onClick={toggleDrawer}
            size="large"
            edge="start"
            sx={{ display: { xs: "inline", md: "none" }, ml: "10px" }}
          >
            <MenuIcon />
          </IconButton>
        </Box>

        {/* Responsive logo */}
        <Box
          sx={{
            flexGrow: { xs: 1, md: 0 },
            display: { xs: "flex", md: "block" },
            marginRight: { xs: 0, md: "8rem" },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image width="74px" height="74px" src={Logo} alt="Brand-logo" />
        </Box>

        {/* Navigation only for large device */}
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
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
        <Box
          sx={{
            flexGrow: 0,
            display: { xs: "none", md: "flex" },
            alignItems: "center",
          }}
        >
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
          <ShadowButton
            variant="contained"
            color="black"
            sx={{
              height: "2.7rem",
              width: "10rem",
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            SUBSCRIBE
          </ShadowButton>
        </Box>
      </Toolbar>
      <Drawer
        sx={{ display: { sm: "block", md: "none" } }}
        anchor="left"
        open={open}
        onClose={toggleDrawer}
      >
        <Box
          sx={{
            width: 200,
            height: 1,
            background: "#F7EDE8E8",
            backdropFilter: "blur(10px)",
          }}
          role="presentation"
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
        >
          <List
            sx={{
              mt: "6rem",
              "& .MuiListItem-button": {
                borderTop: 1,
                borderBottom: 1,
              },
              "& .MuiListItem-button:last-child": {
                borderTop: "none",
              },
            }}
          >
            <ListItem button>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  mx: "auto",
                }}
              >
                Episodes
              </Typography>
            </ListItem>
            <ListItem button>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  mx: "auto",
                }}
              >
                About
              </Typography>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
