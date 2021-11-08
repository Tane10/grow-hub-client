import { ICoordinates } from "./CanvasInterfaces";

/**
 * function that handles drawing a static rectangle
 * @param info object containing X,  Y coordinates and width and height of the rectangle
 * @param style boarder props width and heigh
 * @param ctx required canvas context
 */
export const drawRect = (
  info: {
    x: number | undefined;
    y: number | undefined;
    width: number;
    height: number;
  },
  style: { borderColor: string; borderWidth: number },
  ctx: CanvasRenderingContext2D
) => {
  const { x, y, width, height } = info;
  const { borderColor = "black", borderWidth = 1 } = style;

  ctx.beginPath();
  ctx.strokeStyle = borderColor;
  ctx.lineWidth = borderWidth;
  ctx.rect(x, y, width, height);
  ctx.stroke();
};

//https://medium.com/@martin.crabtree/react-creating-an-interactive-canvas-component-e8e88243baf6
