/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Grid } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import ThreeSixty from "react-360-view";

const Bottel = () => {
  const mainRef = useRef(null);
  const bottelWrapperRef = useRef(null);
  const bottelRef = useRef(null);
  const [y, setY] = useState(0);
  const [moveCenter, setMoveCenter] = useState(false);
  const [moveBottom, setMoveBottom] = useState(false);

  const handleNavigation = (e) => {
    const scrollPos = window.scrollY;

    bottelRef.current.speedFactor = 1;

    if (y > Math.round(scrollPos)) {
      // bottelRef.current.speedFactor = 1;
      // bottelRef.current.loadedImages = 3000;
      // bottelRef.current.startMoving();
      bottelRef.current.prev();
    } else if (y < Math.round(scrollPos)) {
      // bottelRef.current.speedFactor = 1;
      // bottelRef.current.loadedImages = 3000;
      // bottelRef.current.startMoving();
      bottelRef.current.next();
    }
    setY(Math.round(scrollPos));
    // console.log("y", y);
    console.log("bottelRef", bottelRef);
  };

  const handleBottelPosition = (e) => {
    const scrollPos = window.scrollY + window.innerHeight;
    if (scrollPos > 1000) {
      setMoveCenter(true);
    } else {
      setMoveCenter(false);
    }

    if (scrollPos > 14500) {
      setMoveBottom(true);
    } else if (scrollPos < 14400) {
      setMoveBottom(false);
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
    <Grid
      className={moveCenter ? "bottel_container_active" : "bottel_container"}
      ref={mainRef}
    >
      <Grid
        className={moveBottom ? "bottel_wrapper_active" : "bottel_wrapper"}
        ref={bottelWrapperRef}
      >
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
      <Button className="buy_button">BUY</Button>
    </Grid>
  );
};

export default Bottel;
