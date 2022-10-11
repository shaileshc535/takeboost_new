import { Button, Grid, Typography } from "@mui/material";
import SouthIcon from "@mui/icons-material/South";

const HeroHeading = () => {
  return (
    <>
      <Grid container className="hero-container">
        <Typography variant="h1" className="hero-heading">
          BECAUSE
          <br />
          BEING SICK
          <br />
          SUCKS
        </Typography>
        <Typography variant="subtitle1" className="hero-subtitle">
          BOOST Immunity <br />
          Gummy Vitamin
        </Typography>
      </Grid>

      <Grid className="sick_container">
        <Grid container className="sick-wrapper">
          <Grid item className="left-content">
            <Typography variant="h1" className="border-heading">
                 Stay <br />
              sick🤙
              <br />
              🤧not <br />
              sick
              <br />‍
            </Typography>
          </Grid>

          <Grid item className="center-content">
            <Typography className="downword-arrow">
              <SouthIcon />
              {/* arrow_downward */}
            </Typography>
          </Grid>

          <Grid item className="right-content">
            <Typography className="right-first-heading" variant="h6">
              BOOST helps you get sick less
            </Typography>
            <Typography variant="h4" className="right-secound-heading">
              Be proactive <br />
              not reactive <br />
              about your <br />
              immunity
            </Typography>
            <Typography variant="h5" className="right-third-heading">
              No one gives a f*ck about their <br />
              immune system unless they
              <br />
              have to...and it took us a <br />
              pandemic to realize that.
              <br />
              BOOST is here to fix that.
            </Typography>
            <Button className="buy-boost-button">buy boost</Button>
          </Grid>
        </Grid>

        <Grid container className="ingrediant-wrapper">
          <Typography variant="h1" className="ingrediant-heading">
            Ingredients
            <br />
               your mom will love
          </Typography>
          <Typography variant="subtitle1" className="ingrediant-subtitle">
            And you,
            <br />
            of course.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default HeroHeading;
