import React from "react";
import { StyledButton } from "./Button.styled";

const Button = ({ bg, handler, children }) => {
  return (
    <StyledButton onClick={handler} bg={bg}>
      {children}
    </StyledButton>
  );
};

export default Button;
