import styled from "@emotion/styled";

export const Text = styled.p`
  font-size: ${({ size }) => size || "1rem"};
  font-weight: ${({ weight }) => weight || 300};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};

  line-height: 1.2em;
  letter-spacing: 0px;
  text-align: center;
`;
export const StyledLink = styled.a`
  font-size: ${({ size }) => size || "1rem"};
  font-weight: ${({ weight }) => weight || 300};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};

  line-height: 1.2em;
  letter-spacing: 0px;
  text-align: center;
`;
export const Logo = styled.img`
  width: 25px;
  height: 25spx;
`;
export const Container = styled.div`
  padding: ${({ padding }) => padding || "1.5rem"};
  min-height: ${({ minHeight }) => minHeight};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${({ justify }) => justify};
  background-color: ${({ bg }) => bg || "#f5f8f8"};
`;
export const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${({ margin }) => margin};
  gap: ${({ gap }) => gap};
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;
