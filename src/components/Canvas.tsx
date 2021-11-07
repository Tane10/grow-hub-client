import React, { useEffect, useRef } from "react";

const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const context = canvasRef.current?.getContext("2d");

    if (context) {
      //Our first draw
      context.fillStyle = "#000000";
      context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    }
  }, []);

  return <canvas ref={canvasRef} width="300" height="300"></canvas>;
};

export default Canvas;
