import React from "react";
import { Avatar, Box, Divider, Grid, Paper, Typography } from "@mui/material";
import ComposedLink from "@components/Custom/ComposedLink";
import { SiGooglepodcasts, SiSpotify, SiYoutube } from "react-icons/si";
import Vector008 from "@images/Vectors/Vector008.png";
import Image from "next/image";
import ShadowButton from "@components/Custom/ShadowButton";

const RecentEpisodes = () => {
  return (
    <Box
      component="section"
      sx={{
        bgcolor: "champagne.main",
        py: "150px",
      }}
    >
      <Typography
        variant="h2"
        component="h2"
        gutterBottom
        sx={{
          fontSize: "60px",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Recent Episodes
      </Typography>
      <Typography
        sx={{
          fontSize: "22.65px",
          fontWeight: "medium",
          textAlign: "center",
        }}
      >
        Available on your favorite platform
      </Typography>
      <Grid container spacing={3} sx={{ mt: "60px", px: "120px" }}>
        <Box sx={{ position: "relative", width: 1 }}>
          <Box
            sx={{
              position: "absolute",
              textAlign: "center",
              right: -70,
              top: -60,
            }}
          >
            <Image height="125px" width="125px" src={Vector008} alt="bn" />
          </Box>
        </Box>
        {[1, 2, 3, 4, 5, 6].map((item, index) => {
          return (
            <Grid key={index} item xs={6}>
              <Paper
                sx={{
                  height: "250px",
                  padding: "20px",
                  border: "2px solid #000000",
                  boxShadow: "10px 10px 0px #81ADC8",
                  borderRadius: "12px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Grid container>
                  <Grid
                    item
                    xs={4.2}
                    sx={{
                      display: "flex",
                      justifyContent: "end",
                      gap: "10px",
                      padding: "5px 10px",
                      height: "170px",
                      width: "170px",
                      backgroundImage: `url("https://i.ibb.co/TgHFqFs/microphone-for-audio-record-or-podcast-concept-single-microphone-on-dark-shadow-background-with-copy.jpg")`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      borderRadius: "8px",
                    }}
                  >
                    <ComposedLink to={"/sd"}>
                      <SiGooglepodcasts
                        style={{ fontSize: "12px", color: "#fff" }}
                      />
                    </ComposedLink>
                    <ComposedLink to={"/xb"}>
                      <SiSpotify style={{ fontSize: "12px", color: "#fff" }} />
                    </ComposedLink>
                    <ComposedLink to={"/rdgr"}>
                      <SiYoutube style={{ fontSize: "12px", color: "#fff" }} />
                    </ComposedLink>
                  </Grid>
                  <Grid
                    item
                    xs={7.8}
                    sx={{
                      paddingLeft: "20px",
                      paddingTop: "15px",
                    }}
                  >
                    <ComposedLink
                      to="/iubsvi"
                      sx={{
                        "&:hover": {
                          color: "vermillion.main",
                        },
                      }}
                    >
                      <Typography
                        gutterBottom
                        sx={{
                          fontSize: "16px",
                          fontWeight: "bold",
                        }}
                      >
                        Eps. 6
                      </Typography>
                      <Typography
                        gutterBottom
                        sx={{
                          fontSize: "22.65px",
                          fontWeight: "bold",
                          lineHeight: "1.2",
                        }}
                      >
                        Pandemic Becoming Endemic
                      </Typography>
                    </ComposedLink>
                    <Divider sx={{ mb: "8px" }} />
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "medium",
                      }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Curabitur ac ultrices odio.
                    </Typography>
                  </Grid>
                </Grid>
                <Box
                  sx={{
                    mt: "10px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    {["covid-19", "health"].map((item) => {
                      return (
                        <Typography
                          key={item}
                          sx={{
                            fontSize: "12px",
                            fontWeight: "medium",
                            border: "1px solid",
                            borderColor: "davysGrey.main",
                            color: "davysGrey.main",
                            borderRadius: "4px",
                            padding: "6px 12px",
                          }}
                        >
                          {item}
                        </Typography>
                      );
                    })}
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "12px",
                        fontWeight: "bold",
                        marginRight: "10px",
                      }}
                    >
                      Hosted by:
                    </Typography>
                    {[1, 2].map((item, index) => {
                      return (
                        <Avatar
                          key={item}
                          sx={{
                            width: "25px",
                            height: "25px",
                            marginRight: "-10px",
                          }}
                        />
                      );
                    })}
                  </Box>
                </Box>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "100px",
        }}
      >
        <ShadowButton
          sx={{
            height: "60px",
            width: "250px",
          }}
        >
          BROWSE ALL EPISODES
        </ShadowButton>
      </Box>
    </Box>
  );
};

export default RecentEpisodes;
