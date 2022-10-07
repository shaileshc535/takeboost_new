import { Grid, Typography, Button } from "@mui/material";

const Header = () => {
  return (
    <>
      <Grid
        container
        direction="row"
        alignItems="center"
        className="nav-container"
      >
        <Grid className="brand" item>
          <Typography variant="h1" className="logo-name logo_name">
            boost
          </Typography>
          <Typography variant="subtitle1" className="logo-desc">
            immunity vitamin
          </Typography>
        </Grid>

        <Grid className="nav-link-wrapper" item>
          <a href="https://takeboost.netlify.app/" className="shop-link">
            shop
          </a>
          <a href="https://takeboost.netlify.app/" className="shop-link">
            about
          </a>
        </Grid>
        <Grid item>
          <Button
            className="cart-button"
            style={{
              padding: "14px 35px",
              border: "2px solid #fff",
              borderRadius: "26px",
              backgroundColor: "transparent",
              color: "#fff",
              fontSize: "1.5vw",
              lineHeight: "110%",
              textTransform: "uppercase",
            }}
          >
            cart
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Header;
