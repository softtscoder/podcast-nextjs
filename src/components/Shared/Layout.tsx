import React from "react";
import Head from "next/head";
import { Box } from "@mui/material";
import Footer from "@components/Shared/Footer";
import Navbar from "@components/Shared/Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <React.Fragment>
      <Head>
        <title>
          POD OF CAST | Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </title>
        <meta
          name="description"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vitae consectetur interdum, nisl nisi aliquam eros, eget egestas nisl nisi eget."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Navbar />
        <Box component="main" sx={{ flexGrow: 1 }}>
          {children}
        </Box>
        <Footer />
      </Box>
    </React.Fragment>
  );
};

export default Layout;
