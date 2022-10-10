import React from "react";
import { Grid } from "@mui/material";
import Header from "../components/Header";
import HeroHeading from "../components/HeroHeading";
import VerticalScroll from "../components/VerticalScroll";
import CardsScroll from "../components/CardsScroll";
import Footer from "../components/Footer";
import Bottel from "../components/bottel/Bottel";
const Home = () => {
  return (
    <>
      <Grid className="home-wrapper">
        <Grid className="hero-section">
          <Header />
          <Bottel />
          <HeroHeading />
          <Grid className="vertical_scroll_absolute">
            <VerticalScroll />
          </Grid>
          <CardsScroll />
          <Footer />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
