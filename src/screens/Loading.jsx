import { Grid, Typography } from "@mui/material";
import React from "react";

const Loading = () => {
  return (
    <Grid className="loading_container">
      <Typography variant="h1" className="loading_heading">
        <span className="static">b</span>
        <span className="moving">oost</span>

        {/* boost */}
      </Typography>
      <Typography variant="subtitle1" className="loading_title">
        Loading...
      </Typography>
    </Grid>
  );
};

export default Loading;
