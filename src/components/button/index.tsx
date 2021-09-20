import React from "react";
import { Button, ButtonProps } from "@mui/material";

interface Props extends ButtonProps {}
const PrimaryButton: React.FC<Props> = (props: Props) => {
  return (
    <Button
      {...props}
      sx={{
        height: 50,
        fontWeight: "bold",
        color: "#fff",
        background: "#072acd",
      }}
    >
      {props.children}
    </Button>
  );
};

export default PrimaryButton;
