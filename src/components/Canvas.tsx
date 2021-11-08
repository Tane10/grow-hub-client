import React, { useEffect, useRef, useState } from "react";
import { ICanvasProps, ICoordinates } from "./CanvasInterfaces";
import { drawRect } from "./CanvasFunctions";
import { Button, Container } from "@mui/material";

//TODO: need to start to write a basic click / stamp a shape got a rectangle function

const Canvas = (props: ICanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [isPainting, setIsPainting] = useState(false);
  const [isRectangle, setIsRectangle] = useState(false);
  const [coordinates, setCoordinates] = useState<ICoordinates>();

  const handleRectangle = () => {
    setIsRectangle(true);
  };

  const handleCanvasClick = (event: any) => {
    const currentCoords: ICoordinates = { x: event.clientX, y: event.clientY };
    setCoordinates(currentCoords);

    if (isRectangle) {
      const rectInfo = {
        x: coordinates?.x,
        y: coordinates?.y,
        width: 10,
        height: 10,
      };

      const style = {
        borderColor: "white",
        borderWidth: 2,
      };

      drawRect(rectInfo, style, context);
    }
  };

  useEffect(() => {
    const context = canvasRef.current?.getContext("2d");

    if (context) {
      //Our first draw
      context.fillStyle = "#000000";
      context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    }
  }, []);

  return (
    <div>
      <Container>
        <div>
          <Button variant="outlined" onClick={handleRectangle}>
            rectangle
          </Button>
        </div>
        <canvas
          ref={canvasRef}
          width={props.width}
          height={props.height}
          onClick={handleCanvasClick}
        ></canvas>
      </Container>
    </div>
  );
};

export default Canvas;
