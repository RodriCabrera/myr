import React from "react";
import { StyledButton } from "./Button.styled";

const Button = ({ bg, handler, children, color, margin, padding, size }) => {
  return (
    <StyledButton
      onClick={handler}
      bg={bg}
      color={color}
      margin={margin}
      padding={padding}
      size={size}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
