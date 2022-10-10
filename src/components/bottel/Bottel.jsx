import { Grid } from "@mui/material";
import React, { useEffect, useRef } from "react";
import ThreeSixty from "react-360-view";

const Bottel = () => {
  const mainRef = useRef(null);
  const bottelWrapperRef = useRef(null);
  const bottelRef = useRef(null);
  useEffect(() => {
    window.addEventListener("scroll", (event) => {
      const scrollPos = window.scrollY + window.innerHeight;
      console.log("scrollPos", scrollPos);
      if (scrollPos > 1000) {
        mainRef.current.style.justifyContent = "center";
        mainRef.current.style.transition = " justifyContent 1s ease-out";

        bottelRef.current.style.transform =
          "rotate(" + window.pageYOffset / 2 + "deg)";
      } else {
        mainRef.current.style.justifyContent = "flex-end";
        mainRef.current.style.transition = " justifyContent 2s ease-out";
      }

      if (scrollPos >= 14800) {
        mainRef.current.style.translate = "(-500,-500)";
        bottelWrapperRef.current.style.translate = "(-500,-500)";
      }
    });
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
          scale={1}
        />
      </Grid>
    </Grid>
  );
};

export default Bottel;
