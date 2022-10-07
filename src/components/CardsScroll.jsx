import { Grid, Typography } from "@mui/material";
import React, { useRef, useLayoutEffect, useState } from "react";
import star from "../assets/image/2cd43b_66affcabc77f42108dd1a4b4c02ed7aa_mv2.png";
import halfstar from "../assets/image/2cd43b_bb470dcff5274ddd80fd199577e13352_mv2.png";
import user from "../assets/image/764d59d32f61f0f91dec8c442ab052c5.jpg";

const CardsScroll = () => {
  const [rightCardOne, setRightCardOne] = useState(false);
  const [rightCardTwo, setRightCardTwo] = useState(false);
  const [rightCardThree, setRightCardThree] = useState(false);
  const [leftCardOne, setLeftCardOne] = useState(false);
  const [leftCardTwo, setLeftCardTwo] = useState(false);

  const leftOneRef = useRef(null),
    leftTwoRef = useRef(null),
    rightOneRef = useRef(null),
    rightTwoRef = useRef(null),
    rightThreeRef = useRef(null);

  useLayoutEffect(() => {
    // const topPos = (element) => element.getBoundingClientRect().top;
    // const bottomPos = (element) => element.getBoundingClientRect().bottom;

    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight;

      if (scrollPos >= 13525) {
        setRightCardOne(true);
      }
      if (scrollPos <= 13526) {
        setRightCardOne(false);
      }

      if (scrollPos >= 13775) {
        setRightCardTwo(true);
      }
      if (scrollPos <= 13776) {
        setRightCardTwo(false);
      }

      if (scrollPos >= 14000) {
        setRightCardThree(true);
      }
      if (scrollPos <= 14001) {
        setRightCardThree(false);
      }

      if (scrollPos >= 13770) {
        setLeftCardOne(true);
      }
      if (scrollPos <= 13771) {
        setLeftCardOne(false);
      }

      if (scrollPos >= 13975) {
        setLeftCardTwo(true);
      }
      if (scrollPos <= 13976) {
        setLeftCardTwo(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Grid className="card-scroll-container">
        <Grid container item className="card-scroll-heading-wrapper">
          <Typography variant="h1" className="card-scroll-heading">
               Vegan
            <br />
            non gmo
            <br />
            nut free
            <br />
              gluten free <br /> made in usa
          </Typography>
          <Typography variant="subtitle1" className="card-scroll-subtitle">
            A catalyst in promoting
            <br />a health-conscious
            <br />
            lifestyle.
          </Typography>
        </Grid>

        <Grid container className="card-scroll-wrapper">
          <Grid item className="card-scroll-left">
            <Typography className="border-heading-black">
              Let the
              <br />
              💪BOOST
              <br />
              💪flow
              <br />
              thru <br />
               you⚡️
            </Typography>

            <Grid container className="scroll-wrapper">
              <Grid
                ref={leftOneRef}
                animate={leftCardOne}
                zIndex={2}
                item
                className={
                  leftCardOne ? "scrolled_card_active" : "scrolled_card"
                }
              >
                <Grid className="star-image-wrapper">
                  <img src={star} alt="star" className="star-rating" />
                  <img src={star} alt="star" className="star-rating" />
                  <img src={star} alt="star" className="star-rating" />
                  <img src={star} alt="star" className="star-rating" />
                  <img src={star} alt="star" className="star-rating" />
                </Grid>
                <Typography className="heading-04">
                  I haven’t sneezed since I took
                  <br />
                  BOOST
                </Typography>
                <Grid className="user-info">
                  <img src={user} alt="user" className="user-png" />
                  <Typography className="heading-04-user">@superman</Typography>
                </Grid>
              </Grid>

              <Grid
                item
                className={
                  leftCardTwo
                    ? "left-scroll-card-2_active"
                    : "left-scroll-card-2"
                }
                ref={leftTwoRef}
              >
                <Grid className="star-image-wrapper">
                  <img src={star} alt="star" className="star-rating" />
                  <img src={star} alt="star" className="star-rating" />
                  <img src={star} alt="star" className="star-rating" />
                  <img src={star} alt="star" className="star-rating" />
                  <img src={star} alt="star" className="star-rating" />
                </Grid>
                <Typography className="heading-04">
                  It’s the perfect pick-me-up
                  <br />
                  BOOST
                </Typography>
                <Grid className="user-info">
                  <img src={user} alt="user" className="user-png" />
                  <Typography className="heading-04-user">
                    @Karenfromyouroffice
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid item className="card-scroll-right">
            <Grid container className="card-scroll-right-content">
              <Typography className="card-heading-05">
                WORD ON
                <br />
                THE STREET
              </Typography>
              <Typography className="card-paragraph-content">
                Trust us with your immunity
              </Typography>
            </Grid>

            <Grid container className="scroll-wrapper">
              <Grid
                item
                className={
                  rightCardOne
                    ? "right-scroll-card-01_active"
                    : "right-scroll-card-01"
                }
                ref={rightOneRef}
                animate={rightCardOne}
                zIndex={2}
              >
                <Grid className="star-image-wrapper">
                  <img src={star} alt="star" className="star-rating" />
                  <img src={star} alt="star" className="star-rating" />
                  <img src={star} alt="star" className="star-rating" />
                  <img src={star} alt="star" className="star-rating" />
                  <img src={star} alt="star" className="star-rating" />
                </Grid>
                <Typography className="heading-04">
                  It’s like a refreshing cold <br />
                  shower
                </Typography>
                <Grid className="user-info">
                  <img src={user} alt="user" className="user-png" />
                  <Typography className="heading-04-user">
                    @JesseClemente
                  </Typography>
                </Grid>
              </Grid>

              <Grid
                item
                className={
                  rightCardTwo
                    ? "right-scroll-card-02_active"
                    : "right-scroll-card-02"
                }
                ref={rightTwoRef}
              >
                <Grid className="star-image-wrapper">
                  <img src={star} alt="star" className="star-rating" />
                  <img src={star} alt="star" className="star-rating" />
                  <img src={star} alt="star" className="star-rating" />
                  <img src={star} alt="star" className="star-rating" />
                  <img src={star} alt="star" className="star-rating" />
                </Grid>
                <Typography className="heading-04">
                  The only [best] way to rise <br />
                  and shine
                </Typography>
                <Grid className="user-info">
                  <img src={user} alt="user" className="user-png" />
                  <Typography className="heading-04-user">
                    @TheentireKUWTKcast
                  </Typography>
                </Grid>
              </Grid>

              <Grid
                item
                className={
                  rightCardThree
                    ? "right-scroll-card-03_active"
                    : "right-scroll-card-03"
                }
                ref={rightThreeRef}
              >
                <Grid className="star-image-wrapper">
                  <img src={star} alt="star" className="star-rating" />
                  <img src={halfstar} alt="halfstar" className="star-rating" />
                  <img src={halfstar} alt="halfstar" className="star-rating" />
                  <img src={halfstar} alt="halfstar" className="star-rating" />
                  <img src={halfstar} alt="halfstar" className="star-rating" />
                </Grid>
                <Typography className="heading-04">I hate it</Typography>
                <Grid className="user-info">
                  <img src={user} alt="user" className="user-png" />
                  <Typography className="heading-04-user">@Yourex</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default CardsScroll;
