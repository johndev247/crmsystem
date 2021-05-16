import React from "react";
import UserDashboardEntry from "../AppEntries/UserDashboardEntry";
import Footer from "../LogedEntry/Footer/Footer";
import Navbar from "../LogedEntry/Navbar/Navbar";
import { MainContainer } from "./main.style";
const Main = ({ children }) => {
  return (
    <>
      <Navbar />
      <MainContainer>{children}</MainContainer>
      <Footer />
    </>
  );
};

export default Main;
