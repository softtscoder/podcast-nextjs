import React from "react";
import Head from "next/head";
import { Box } from "@mui/material";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <React.Fragment>
      <Head>
        <title>Own testlabs</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Navbar />
        <Box component="main" sx={{ flexGrow: 1, p: 1 }}>
          {children}
        </Box>
        <Footer />
      </Box>
    </React.Fragment>
  );
};

export default Layout;