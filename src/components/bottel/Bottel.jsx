import { Grid } from "@mui/material";
import React from "react";
import ThreeSixty from "react-360-view";

const Bottel = () => {
  return (
    <Grid className="bottel_container">
      <Grid className="bottel_wrapper">
        <ThreeSixty
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
