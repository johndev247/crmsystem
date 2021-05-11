import React from "react";
import Grid from "../../Styles/grid.style";
import Dashboard from "../Dashboard/Dashboard";
import Main from "../Main/Main";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

const LogedEntry = () => {
  return (
    <Grid>
      <Navbar />
      <Main />
      <Footer />
    </Grid>
  );
};

export default LogedEntry;
