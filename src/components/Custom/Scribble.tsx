import React from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import ScribbleBlack from "@images/Vectors/ScribbleBlack.png";

const Scribble = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        mt: "-78px",
        left: { xs: "35%", md: "45%" },
        right: 0,
      }}
    >
      <Image height="150px" width="150px" src={ScribbleBlack} alt="bn" />
    </Box>
  );
};

export default Scribble;
