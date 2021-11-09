// import { ICoordinates } from "./CanvasInterfaces";

import { ICoordinates } from "../../CanvasInterfaces";

/**
 * function that handles drawing a static rectangle
 * @param info object containing X,  Y coordinates and width and height of the rectangle
 * @param style boarder props width and heigh
 * @param ctx required canvas context
 */
export const drawRect = (
  info: {
    x: number;
    y: number;
    width: number;
    height: number;
  },
  style: { borderColor: string; borderWidth: number },
  ctx: CanvasRenderingContext2D | null | undefined
) => {
  const { x, y, width, height } = info;
  const { borderColor, borderWidth } = style;

  console.log(info);
  if (ctx) {
    ctx.beginPath();
    ctx.strokeStyle = borderColor;
    ctx.lineWidth = borderWidth;
    ctx.rect(x, y, width, height);
    ctx.stroke();
  }
};

/**
 * function that creates a brush stroke on the canvas
 * @param lineWeight thickness of the line
 * @param color colour of the line
 * @param ctx required canvas context
 * @param penPosition coordinates containing pen position
 */
export const brushTool = (
  lineWeight: number,
  color: string,
  ctx: CanvasRenderingContext2D,
  penPosition: ICoordinates
) => {
  ctx.lineWidth = lineWeight;
  ctx.strokeStyle = color;
  ctx.lineCap = "round";

  const { x, y } = penPosition;

  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x, 100);
  ctx.stroke();
};

//https://medium.com/@martin.crabtree/react-creating-an-interactive-canvas-component-e8e88243baf6
