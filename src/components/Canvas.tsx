import { useEffect, useRef, useState } from "react";
import { ICanvasProps, ICoordinates } from "./CanvasInterfaces";
import { Container } from "@mui/material";
import { brushTool, drawRect } from "./Canvas/Drawing/DrawingUtills";
import "./Canvas.css";
import CanvasButtonGroup from "./Canvas/CanvasButtons";
import { HexColorPicker } from "react-colorful";

const Canvas: React.FC<ICanvasProps> = (props: ICanvasProps) => {
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [color, setColor] = useState("#aabbcc");
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = 500;
      canvas.height = 500;
      canvas.style.width = `${props.width}px`;
      canvas.style.height = `${props.height}px`;
    }
    const context = canvasRef.current?.getContext("2d");
    if (context) {
      context.fillStyle = "white";
      context.scale(2, 2);
      context.lineCap = "round";
      context.strokeStyle = "black";
      context.lineWidth = 5;
      contextRef.current = context;
    }
  }, []);

  const startDrawing: React.MouseEventHandler = ({ nativeEvent }): void => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current?.beginPath();
    contextRef.current?.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const finishDrawing = (): void => {
    contextRef.current?.closePath();
    setIsDrawing(false);
  };

  const draw: React.MouseEventHandler = ({ nativeEvent }): void => {
    if (!isDrawing) {
      return;
    }
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current?.lineTo(offsetX, offsetY);
    contextRef.current?.stroke();
  };

  const clearCanvas = (): void => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (context && canvas) {
      context.fillStyle = "white";
      context.fillRect(0, 0, canvas.width, canvas.height);
    }
  };

  return (
    <div>
      <Container>
        <canvas
          className="canvas"
          ref={canvasRef}
          // width={props.width}
          // height={props.height}
          onMouseDown={startDrawing}
          onMouseUp={finishDrawing}
          onMouseMove={draw}
        ></canvas>
        <div>
          <CanvasButtonGroup />
        </div>
        <div>
          <HexColorPicker color={color} onChange={setColor} />
        </div>
      </Container>
    </div>
  );
};

export default Canvas;
