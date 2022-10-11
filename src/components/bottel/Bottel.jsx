/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Grid } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import ThreeSixty from "react-360-view";
// import alph from "";

const Bottel = () => {
  const mainRef = useRef(null);
  const bottelRef = useRef(null);
  const imageRef = useRef(null);
  const [y, setY] = useState(0);
  const [moveCenter, setMoveCenter] = useState(false);
  const [moveBottom, setMoveBottom] = useState(false);

  const handleNavigation = (e) => {
    const scrollPos = window.scrollY;

    bottelRef.current.speedFactor = 1;

    if (y > Math.round(scrollPos)) {
      bottelRef.current.prev();
    } else if (y < Math.round(scrollPos)) {
      bottelRef.current.next();
    }
    setY(Math.round(scrollPos));
  };

  const handleBottelPosition = (e) => {
    const scrollPos = window.scrollY + window.innerHeight;
    if (scrollPos > 950) {
      setMoveCenter(true);
    } else {
      setMoveCenter(false);
    }

    if (scrollPos > 14300) {
      setMoveBottom(true);
    } else if (scrollPos < 14300) {
      setMoveBottom(false);
    }

    // console.log("scrollPos", scrollPos);

    if (scrollPos >= 0 && scrollPos <= 5654) {
      imageRef.current.style.filter =
        "invert(69%) sepia(50%) saturate(7299%) hue-rotate(354deg) brightness(103%) contrast(101%)";
    } else if (scrollPos >= 5655 && scrollPos <= 8525) {
      imageRef.current.style.filter =
        "invert(10%) sepia(100%) saturate(5415%) hue-rotate(266deg) brightness(112%) contrast(117%)";
    } else if (scrollPos >= 8526 && scrollPos <= 12000) {
      imageRef.current.style.filter =
        "invert(89%) sepia(22%) saturate(221%) hue-rotate(323deg) brightness(109%) contrast(101%)";
    } else if (scrollPos >= 12000 && scrollPos <= 14799) {
      imageRef.current.style.filter =
        "invert(89%) sepia(22%) saturate(221%) hue-rotate(323deg) brightness(109%) contrast(101%)";
    } else if (scrollPos >= 14800) {
      imageRef.current.style.filter =
        "invert(69%) sepia(50%) saturate(7299%) hue-rotate(354deg) brightness(103%) contrast(101%)";
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
        className={
          moveBottom ? "bottel_main_wrapper_active" : "bottel_main_wrapper"
        }
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
        <img src="./alpha.png" alt="" className="alpha_icon" ref={imageRef} />

        <Button className="buy_button">BUY</Button>
      </Grid>
    </Grid>
  );
};

export default Bottel;
