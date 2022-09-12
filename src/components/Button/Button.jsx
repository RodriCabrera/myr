import React from "react";
import { StyledButton } from "./Button.styled";

const Button = ({ bg, handler, children, color }) => {
  return (
    <StyledButton onClick={handler} bg={bg} color={color}>
      {children}
    </StyledButton>
  );
};

export default Button;
