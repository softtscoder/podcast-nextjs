import React from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import ScribbleRed from "@images/Vectors/ScribbleRed.png";

const Scribble = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        mt: "-78px",
        left: "45%",
        right: 0,
      }}
    >
      <Image height="150px" width="150px" src={ScribbleRed} alt="bn" />
    </Box>
  );
};

export default Scribble;
