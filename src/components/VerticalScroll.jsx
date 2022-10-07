import { useState, useRef, useEffect, useLayoutEffect } from "react";
import { Grid, Typography } from "@mui/material";
import elderberry from "../assets/image/elderberries.png";
import orange from "../assets/image/orange.png";
import zinc from "../assets/image/zinc.png";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { ScrollRotate } from "react-scroll-rotate";

const VerticalScroll = () => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);
  const [image5, setImage5] = useState(false);
  const [image6, setImage6] = useState(false);
  const [image7, setImage7] = useState(false);
  const [image8, setImage8] = useState(false);
  const [image9, setImage9] = useState(false);
  const [image10, setImage10] = useState(false);
  const [image11, setImage11] = useState(false);
  const [image12, setImage12] = useState(false);
  const [elderberryDiv, setElderberryDiv] = useState(false);
  const [lemmonDiv, setLemmonDiv] = useState(false);
  const [diamondDiv, setDiamondDiv] = useState(false);

  const mainRef = useRef(null);
  const Image01Ref = useRef(null);
  const Image02Ref = useRef(null);
  const Image03Ref = useRef(null);
  const Image04Ref = useRef(null);
  const Image05Ref = useRef(null);
  const Image06Ref = useRef(null);
  const Image07Ref = useRef(null);
  const Image08Ref = useRef(null);
  const Image09Ref = useRef(null);
  const Image10Ref = useRef(null);
  const Image11Ref = useRef(null);
  const Image12Ref = useRef(null);
  const elderberryRef = useRef(null);
  const lemmonRef = useRef(null);
  const diamondRef = useRef(null);

  useLayoutEffect(() => {
    // const topPos = (element) => element.getBoundingClientRect().top;
    // const bottomPos = (element) => element.getBoundingClientRect().bottom;

    // const Top = topPos(mainRef.current);
    // const Bottom = bottomPos(mainRef.current);

    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight;

      if (scrollPos >= 2701 && scrollPos <= 5620) {
        setElderberryDiv(true);
        setLemmonDiv(false);
        setDiamondDiv(false);
        setImage1(true);
        setImage2(true);
        setImage3(true);
        setImage4(true);
        setImage5(false);
        setImage6(false);
        setImage7(false);
        setImage8(false);
        setImage9(false);
        setImage10(false);
        setImage11(false);
        setImage12(false);
      }
      if (scrollPos >= 5621 && scrollPos <= 8447) {
        setElderberryDiv(false);
        setLemmonDiv(true);
        setDiamondDiv(false);
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
        setImage5(true);
        setImage6(true);
        setImage7(true);
        setImage8(true);
        setImage9(false);
        setImage10(false);
        setImage11(false);
        setImage12(false);
      }
      if (scrollPos >= 8448 && scrollPos <= 11312) {
        setElderberryDiv(false);
        setLemmonDiv(false);
        setDiamondDiv(true);
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
        setImage5(false);
        setImage6(false);
        setImage7(false);
        setImage8(false);
        setImage9(true);
        setImage10(true);
        setImage11(true);
        setImage12(true);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", (event) => {
      const scrollPos = window.scrollY + window.innerHeight;

      if (scrollPos >= 2701 && scrollPos <= 3430) {
        Image01Ref.current.style.transform =
          "rotate(" + window.pageYOffset / 2 + "deg)";
      }

      if (scrollPos >= 3230 && scrollPos <= 4160) {
        Image02Ref.current.style.transform =
          "rotate(" + window.pageYOffset / 2.57 + "deg)";
      }

      if (scrollPos >= 3960 && scrollPos <= 4890) {
        Image03Ref.current.style.transform =
          "rotate(" + window.pageYOffset / 2.57 + "deg)";
      }

      if (scrollPos >= 4690 && scrollPos <= 5680) {
        Image04Ref.current.style.transform =
          "rotate(" + window.pageYOffset / 2.57 + "deg)";
      }

      if (scrollPos >= 5480 && scrollPos <= 6410) {
        Image05Ref.current.style.transform =
          "rotate(" + window.pageYOffset / 2.57 + "deg)";
      }

      if (scrollPos >= 6210 && scrollPos <= 7140) {
        Image06Ref.current.style.transform =
          "rotate(" + window.pageYOffset / 2.57 + "deg)";
      }

      if (scrollPos >= 6940 && scrollPos <= 7870) {
        Image07Ref.current.style.transform =
          "rotate(" + window.pageYOffset / 2.57 + "deg)";
      }

      if (scrollPos >= 7670 && scrollPos <= 8600) {
        Image08Ref.current.style.transform =
          "rotate(" + window.pageYOffset / 2.57 + "deg)";
      }

      if (scrollPos >= 8400 && scrollPos <= 9330) {
        Image09Ref.current.style.transform =
          "rotate(" + window.pageYOffset / 2.57 + "deg)";
      }

      if (scrollPos >= 9130 && scrollPos <= 10060) {
        Image10Ref.current.style.transform =
          "rotate(" + window.pageYOffset / 2.57 + "deg)";
      }

      if (scrollPos >= 9860 && scrollPos <= 10790) {
        Image11Ref.current.style.transform =
          "rotate(" + window.pageYOffset / 2.57 + "deg)";
      }

      if (scrollPos >= 10590 && scrollPos <= 12150) {
        Image12Ref.current.style.transform =
          "rotate(" + window.pageYOffset / 4.33 + "deg)";
      }
    });
  }, []);

  return (
    <Grid className="slides_container" ref={mainRef}>
      <Grid
        ref={elderberryRef}
        container
        className={
          elderberryDiv !== false
            ? "elderberry_wrapper_active"
            : "elderberry_wrapper"
        }
      >
        <Grid container className="scroll-content1">
          <Grid item className="left-block">
            <Typography className="heading-06" variant="h6">
              Ingredients
            </Typography>
            <Typography className="elderberry-heading" variant="h3">
              Elderberry <br />
              <span className="outline-span">
                Vitamin c <br />
                Zinc
              </span>
            </Typography>
          </Grid>
          <Grid item className="right-block">
            <Typography className="heading-06" variant="h6">
              Benefits
            </Typography>
            <Grid container className="right-block-content">
              <Grid item className="right-block-bottom-border">
                <Typography className="heading-05" variant="h5">
                  01. Provides Major Cold and Flu Relief
                </Typography>
              </Grid>
              <Grid item className="right-block-bottom-border">
                <Typography className="heading-05" variant="h5">
                  02. Alleviates Sinus Infections
                </Typography>
              </Grid>
              <Grid item className="right-block-bottom-border">
                <Typography className="heading-05" variant="h5">
                  03. Encourages Healthy Skin
                </Typography>
              </Grid>
              <Grid item className="right-block-bottom-border">
                <Typography className="heading-05" variant="h5">
                  04. Reduces Inflammation
                </Typography>
              </Grid>
            </Grid>
            <Typography className="paragraph" variant="subtitle1">
              BOOST has 150mg of Elderberry Extract per serving
            </Typography>
          </Grid>
          <img
            ref={Image01Ref}
            src={elderberry}
            alt="elderberry"
            className={image1 === false ? "image_01" : "image_01_active"}
          />

          <img
            ref={Image02Ref}
            src={elderberry}
            alt="elderberry"
            className={image2 === false ? "image_02" : "image_02_active"}
          />
          <img
            ref={Image03Ref}
            src={elderberry}
            alt="elderberry"
            className={image3 === false ? "image_03" : "image_03_active"}
          />
          <img
            ref={Image04Ref}
            src={elderberry}
            alt="elderberry"
            className={image4 === false ? "image_04" : "image_04_active"}
          />
        </Grid>
      </Grid>

      <Grid
        ref={lemmonRef}
        container
        className={
          lemmonDiv !== false ? "lemmon_wrapper_active" : "lemmon_wrapper"
        }
      >
        <Grid container className="scroll-content2">
          <Grid item className="left-block">
            <Typography className="heading-06" variant="h6">
              Ingredients
            </Typography>
            <Typography className="elderberry-heading" variant="h3">
              Elderberry <br />
              <span className="outline-span">
                Vitamin c <br />
              </span>
              Zinc
            </Typography>
          </Grid>

          <Grid item className="right-block">
            <Typography className="heading-06" variant="h6">
              Benefits
            </Typography>
            <Grid container className="right-block-content">
              <Grid item className="right-block-bottom-border">
                <Typography className="heading-05" variant="h5">
                  01. Improves Common Cold Symptoms
                </Typography>
              </Grid>
              <Grid item className="right-block-bottom-border">
                <Typography className="heading-05" variant="h5">
                  02. Holds Antioxidant Properties
                </Typography>
              </Grid>
              <Grid item className="right-block-bottom-border">
                <Typography className="heading-05" variant="h5">
                  03. Promotes Glowing Skin
                </Typography>
              </Grid>
              <Grid item className="right-block-bottom-border">
                <Typography className="heading-05" variant="h5">
                  04. Enhances Brain Function
                </Typography>
              </Grid>
            </Grid>
            <Typography className="paragraph" variant="subtitle1">
              BOOST has 150mg of Elderberry Extract per serving
            </Typography>
          </Grid>
          <img
            ref={Image05Ref}
            src={orange}
            alt="orange"
            className={image5 === false ? "image_01" : "image_01_active"}
          />
          <img
            ref={Image06Ref}
            src={orange}
            alt="orange"
            className={image6 === false ? "image_02" : "image_02_active"}
          />
          <img
            ref={Image07Ref}
            src={orange}
            alt="orange"
            className={image7 === false ? "image_03" : "image_03_active"}
          />
          <img
            ref={Image08Ref}
            src={orange}
            alt="orange"
            className={image8 === false ? "image_04" : "image_04_active"}
          />
        </Grid>
      </Grid>

      <Grid
        ref={diamondRef}
        container
        className={
          diamondDiv !== false ? "diamond_wrapper_active" : "diamond_wrapper"
        }
      >
        <Grid container className="scroll-content3">
          <Grid item className="left-block">
            <Typography className="heading-06-black" variant="h6">
              Ingredients
            </Typography>
            <Typography className="elderberry-heading-black" variant="h3">
              <span className="outline-span-black">
                Elderberry <br />
                Vitamin c <br />
              </span>
              Zinc
            </Typography>
          </Grid>

          <Grid item className="right-block">
            <Typography className="heading-06-black" variant="h6">
              Benefits
            </Typography>
            <Grid container className="right-block-content">
              <Grid item className="right-block-bottom-border">
                <Typography className="heading-05-black" variant="h5">
                  01. Acts as a Powerful Antioxidant
                </Typography>
              </Grid>
              <Grid item className="right-block-bottom-border">
                <Typography className="heading-05-black" variant="h5">
                  02. Helps Balance Hormones
                </Typography>
              </Grid>
              <Grid item className="right-block-bottom-border">
                <Typography className="heading-05-black" variant="h5">
                  03. Maintains Heart Health
                </Typography>
              </Grid>
              <Grid item className="right-block-bottom-border">
                <Typography className="heading-05-black" variant="h5">
                  04. Aids in Digestion
                </Typography>
              </Grid>
            </Grid>
            <Typography className="paragraph-black" variant="subtitle1">
              BOOST has 150mg of Elderberry Extract per serving
            </Typography>
          </Grid>
          <img
            ref={Image09Ref}
            src={zinc}
            alt="zink"
            className={image9 === false ? "image_01" : "image_01_active"}
          />
          <img
            ref={Image10Ref}
            src={zinc}
            alt="zink"
            className={image10 === false ? "image_02" : "image_02_active"}
          />
          <img
            ref={Image11Ref}
            src={zinc}
            alt="zink"
            className={image11 === false ? "image_03" : "image_03_active"}
          />
          <img
            ref={Image12Ref}
            src={zinc}
            alt="zink"
            className={image12 === false ? "image_04" : "image_04_active"}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default VerticalScroll;

// import React, { useState } from "react";
// import { motion, useViewportScroll, useTransform } from "framer-motion";

// const letterStyle = {
//   width: "calc(100% - 1rem)",
//   height: "calc(100% - 1rem)",
//   top: "0.5rem",
//   left: "0.5rem",
//   backgroundColor: "#f8efd5",
//   overflow: "hidden",
//   padding: "1rem",
//   boxSizing: "border-box",
//   position: "absolute",
// };

// function Letter() {
//   const { scrollYProgress } = useViewportScroll();
//   const scaleAnim = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 1.5]);
//   const yPosAnim = useTransform(scrollYProgress, [0, 0.4, 1], [0, -250, -100]);

//   return (
//     <motion.div
//       style={{
//         ...letterStyle,
//         scale: scaleAnim,
//         y: yPosAnim,
//       }}
//     >
//       <p style={{ marginTop: 0 }}>Hello, it's been a while!</p>
//       <p>
//         Let's take a look at how we made this animation, we'll discuss the
//         following:
//       </p>
//       <ul>
//         <li>
//           How to <code>useViewportScroll</code> works
//         </li>
//         <li>
//           Why <code>useTransform</code> is useful
//         </li>
//       </ul>
//       <p>
//         Read the article,{" "}
//         <a href="https://blog.sethcorker.com/scroll-animation-with-framer-motion">
//           how to use <code>useViewportScroll</code> and{" "}
//           <code>useTransform</code> in Framer Motion
//         </a>
//       </p>
//     </motion.div>
//   );
// }

// const envelopeStyle = {
//   width: "28rem",
//   height: "15rem",
//   scale: 1,
//   position: "sticky",
//   top: "10rem",
//   left: "calc(50% - 14rem)",
//   boxShadow: `rgba(0, 0, 0, 0.5) 0px 0px 150px 10px`,
// };

// const frontfaceStyle = {
//   width: "100%",
//   height: "100%",
//   backgroundColor: "#debda1",
//   position: "relative",
//   left: 0,
//   top: 0,
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
// };

// function Envelope({ children }) {
//   const [ffLayer, setFfLayer] = useState(0);
//   const { scrollYProgress } = useViewportScroll();
//   const scaleAnim = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1.2]);
//   const yPosAnim = useTransform(scrollYProgress, [0, 0.5, 1], [0, 100, 200]);
//   const zRotAnim = useTransform(scrollYProgress, [0, 0.5, 1], [0, 3, 0]);

//   scrollYProgress.onChange((x) => {
//     setFfLayer(x > 0.4 ? -1 : 0);
//   });

//   return (
//     <motion.div
//       style={{
//         ...envelopeStyle,
//         scale: scaleAnim,
//         y: yPosAnim,
//         rotateZ: zRotAnim,
//       }}
//     >
//       {children}
//       <div style={{ ...frontfaceStyle, zIndex: ffLayer }}>
//         <button onClick={() => window.scrollTo(0, 1500)}>Open Me</button>
//       </div>
//     </motion.div>
//   );
// }

// const letterSceneStyle = {
//   height: "50vh",
// };

// export default function LetterScene() {
//   return (
//     <div style={letterSceneStyle}>
//       <Envelope>
//         <Letter />
//       </Envelope>
//     </div>
//   );
// }
