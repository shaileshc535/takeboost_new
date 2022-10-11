/* eslint-disable react-hooks/exhaustive-deps */
import { Grid } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import ThreeSixty from "react-360-view";

const Bottel = () => {
  const mainRef = useRef(null);
  const bottelWrapperRef = useRef(null);
  const bottelRef = useRef(null);
  const [y, setY] = useState(0);

  const handleNavigation = (e) => {
    const scrollPos = window.scrollY + window.innerHeight;

    if (y > Math.round(scrollPos / 100)) {
      bottelRef.current.prev();
    } else if (y < Math.round(scrollPos / 100)) {
      bottelRef.current.next();
    }
    setY(Math.round(scrollPos / 100));
    console.log("y", y);
  };

  const handleBottelPosition = (e) => {
    const scrollPos = window.scrollY + window.innerHeight;
    if (scrollPos > 1000) {
      mainRef.current.style.justifyContent = "center";
      mainRef.current.style.transition = " justifyContent 1s ease-out";
    } else {
      mainRef.current.style.justifyContent = "flex-end";
      mainRef.current.style.transition = " justifyContent 2s ease-out";
    }

    if (scrollPos > 14500) {
      bottelWrapperRef.current.style.transform = "translate(0%,-50%)";
      mainRef.current.style.transition = " transform 1s ease-out";
    } else if (scrollPos < 14500) {
      bottelWrapperRef.current.style.transform = "translate(0%,0%) 2s ease-out";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", (e) => handleNavigation(e));

    return () => {
      window.removeEventListener("scroll", (e) => handleNavigation(e));
    };
  }, [handleNavigation, y]);

  useEffect(() => {
    window.addEventListener("scroll", (e) => handleBottelPosition(e));

    return () => {
      window.removeEventListener("scroll", (e) => handleBottelPosition(e));
    };
  }, []);

  return (
    <Grid className="bottel_container" ref={mainRef}>
      <Grid className="bottel_wrapper" ref={bottelWrapperRef}>
        <ThreeSixty
          ref={bottelRef}
          className="bottel_images"
          amount={300}
          imagePath="/bottel"
          fileName="{index}.webp"
          spinReverse
          disableZoomin
        />
      </Grid>
    </Grid>
  );
};

export default Bottel;
