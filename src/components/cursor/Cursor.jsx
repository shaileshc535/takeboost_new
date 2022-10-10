import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { motion } from "framer-motion";

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const MouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", MouseMove);

    return () => {
      window.removeEventListener("mousemove", MouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
  };

  return (
    <Grid className="cursor_wraper">
      <motion.div
        className="cursor"
        variant={variants}
        animate="default"
      ></motion.div>
    </Grid>
  );
};

export default Cursor;
