/* eslint-disable react-hooks/exhaustive-deps */
import { Grid } from "@mui/material";
import React, { useRef, useEffect } from "react";

const Cursor = () => {
  const dot = useRef(null);
  const dotOutline = useRef(null);

  const delay = 18;

  const cursorVisible = useRef(true);
  const cursorEnlarged = useRef(false);

  const endX = useRef(window.innerWidth / 2);
  const endY = useRef(window.innerHeight / 2);

  const _x = useRef(0);
  const _y = useRef(0);

  const requestRef = useRef(null);

  const toggelCursorVisibility = () => {
    if (cursorVisible.current) {
      dot.current.style.opacity = 1;
      dotOutline.current.style.opacity = 1;
    } else {
      dot.current.style.opacity = 0;
      dotOutline.current.style.opacity = 0;
    }
  };

  const toggelCursorSize = () => {
    if (cursorEnlarged.current) {
      dot.current.style.transform = "translate(-50%,-50%) scale(1)";
      dotOutline.current.style.transform = "translate(-50%,-50%) scale(1)";
    }
  };

  const mouseOverEvent = () => {
    cursorEnlarged.current = true;
    toggelCursorSize();
  };

  const mouseOutEvent = () => {
    cursorEnlarged.current = true;
    toggelCursorSize();
  };

  const mouseEnterEvent = () => {
    cursorVisible.current = true;
    toggelCursorVisibility();
  };

  const mouseLeaveEvent = () => {
    cursorVisible.current = false;
    toggelCursorVisibility();
  };

  const mouseMoveEvent = (e) => {
    cursorVisible.current = true;
    toggelCursorVisibility();

    endX.current = e.pageX;
    endY.current = e.pageY;

    dot.current.style.top = endY.current + "px";
    dot.current.style.left = endX.current + "px";
  };

  const animateDotOutline = () => {
    _x.current += (endX.current - _x.current) / delay;
    _y.current += (endY.current - _y.current) / delay;

    dotOutline.current.style.top = _y.current + "px";
    dotOutline.current.style.left = _x.current + "px";

    requestRef.current = requestAnimationFrame(animateDotOutline);
  };

  useEffect(() => {
    window.addEventListener("mousedown", mouseOverEvent);
    window.addEventListener("mouseup  ", mouseOutEvent);
    window.addEventListener("mousemove", mouseMoveEvent);
    window.addEventListener("mouseenter", mouseEnterEvent);
    window.addEventListener("mouseleave", mouseLeaveEvent);

    animateDotOutline();

    return () => {
      window.removeEventListener("mousedown", mouseOverEvent);
      window.removeEventListener("mouseup", mouseOutEvent);
      window.removeEventListener("mousemove", mouseMoveEvent);
      window.removeEventListener("mouseenter", mouseEnterEvent);
      window.removeEventListener("mouseleave", mouseLeaveEvent);
    };
  }, [
    animateDotOutline,
    mouseEnterEvent,
    mouseLeaveEvent,
    mouseMoveEvent,
    mouseOutEvent,
    mouseOverEvent,
  ]);

  return (
    <Grid className="cursor_container">
      <Grid ref={dotOutline} className="cursor_dot_outline"></Grid>
      <Grid ref={dot} className="cursor_dot"></Grid>
    </Grid>
  );
};

export default Cursor;
