import { Button, ButtonGroup } from "@mui/material";
const CanvasButtonGroup: React.FC = () => {
  const buttonDetails: [number, string][] = [
    [0, "Clear"],
    [1, "Undo"],
    [2, "Rectangle"],
    [3, "Line"],
  ];

  return (
    <ButtonGroup>
      {buttonDetails.map((details) => {
        return <Button key={details[0]}>{details[1]}</Button>;
      })}
    </ButtonGroup>
  );
};

export default CanvasButtonGroup;
