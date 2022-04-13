import * as React from "react";
import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";

const ShadowButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.black.contrastText,
  borderRadius: "8px",
  backgroundColor: theme.palette.black.main,
  boxShadow: "6px 6px 0px rgba(0, 0, 0, 0.25)",
  "&:hover": {
    backgroundColor: theme.palette.black.main,
    boxShadow: "none",
  },
}));

export default ShadowButton;
