import React, { useEffect, useRef } from "react";
import { ICanvasProps } from "./CanvasInterfaces";

const Canvas = (props: ICanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const context = canvasRef.current?.getContext("2d");

    if (context) {
      //Our first draw
      context.fillStyle = "#000000";
      context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    }
  }, []);

  return (
    <canvas ref={canvasRef} width={props.width} height={props.height}></canvas>
  );
};

export default Canvas;
