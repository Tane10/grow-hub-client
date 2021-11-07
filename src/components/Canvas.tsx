import React, { useEffect, useRef, useState } from "react";
import { ICanvasProps, ICoordinates } from "./CanvasInterfaces";
import { drawRect } from "./CanvasFunctions";

//TODO: need to start to write a basic click / stamp a shape got a rectangle function

const Canvas = (props: ICanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [isPainting, setIsPainting] = useState(false);
  const [mousePositioning, setMousePositioning] = useState<
    ICoordinates | undefined
  >(undefined);

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
