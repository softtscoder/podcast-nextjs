import React from "react";
import { Avatar, Box, Paper, Typography } from "@mui/material";
import Image from "next/image";
import Sparkle from "@images/Vectors/Sparkle.png";
import SpotifyIcon from "@images/BrandIcons/SpotifyIcon.png";
import Slider from "react-slick";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Reviews = () => {
  const customSlider = React.useRef<any>();
  const settings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 1500,
    cssEase: "linear",
    swipeToSlide: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 1000,
          dots: true,
          swipeToSlide: true,
        },
      },
    ],
  };

  return (
    <Box
      component="section"
      sx={{
        py: "140px",
        px: { xs: "20px", md: "140px" },
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
          component="div"
          sx={{
            fontSize: { xs: "20px", md: "60px" },
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
              display: { xs: "none", md: "block" },
            }}
          >
            <Image height="100px" width="100px" src={Sparkle} alt="bn" />
          </Box>
          What our listeners say
        </Typography>
      </Box>
      <Typography
        sx={{
          fontSize: { xs: "16px", md: "23px" },
          fontWeight: "medium",
          textAlign: "center",
        }}
      >
        Their experience throughout every platform
      </Typography>
      <Box sx={{ mt: { xs: "50px", md: "100px" } }}>
        <Slider
          ref={(slider: any) => (customSlider.current = slider)}
          {...settings}
        >
          {[1, 2, 3, 4].map((item: any, index: number) => {
            return (
              <Box key={index} sx={{ m: { xs: "2vw", md: "5px" } }}>
                <Paper
                  elevation={3}
                  sx={{
                    height: { md: "310px" },
                    width: { xs: "85vw", md: "520px" },
                    padding: { xs: "20px", md: "40px" },
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: "10px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "45px", md: "95px" },
                      fontWeight: "bold",
                      color: "vermillion.main",
                      lineHeight: "0.7",
                      marginBottom: { md: "-20px" },
                    }}
                  >
                    {`"`}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "16px", md: "22.65px" },
                      fontWeight: "medium",
                      flexGrow: 1,
                    }}
                  >
                    Lorem ipsum dolor sit amet consectet piscing elit, sed do
                    eiusmod tempor incidi ut labore et dolore magna aliqua.
                  </Typography>
                  <Box
                    sx={{
                      mt: "20px",
                      display: "flex",
                      justifyContent: "flex-start",
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
                      Luna lovegood,
                    </Typography>
                    <Image
                      src={SpotifyIcon}
                      alt=""
                      height="16px"
                      width="16px"
                    />
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "bold",
                      }}
                    >
                      Spotify
                    </Typography>
                  </Box>
                </Paper>
              </Box>
            );
          })}
        </Slider>
        <Box sx={{ mt: "60px" }}>
          <ArrowBackIosOutlinedIcon
            onClick={() => customSlider.current.slickPrev()}
            sx={{
              fontSize: "40px",
              marginRight: "20px",
              padding: "7px",
              border: "2px solid #000",
              borderRadius: "50%",
              "&:hover": {
                cursor: "pointer",
                color: "vermillion.main",
                borderColor: "vermillion.main",
              },
            }}
          />
          <ArrowForwardIosOutlinedIcon
            onClick={() => customSlider.current.slickNext()}
            sx={{
              fontSize: "40px",
              border: "2px solid #000",
              borderRadius: "50%",
              padding: "7px",
              "&:hover": {
                cursor: "pointer",
                color: "vermillion.main",
                borderColor: "vermillion.main",
              },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Reviews;
