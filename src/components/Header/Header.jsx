import styled from "@emotion/styled";
import { Container, DateContainer, Wrapper } from "./Header.styles";
const Text = styled.p`
  font-size: ${({ size }) => size || "2rem"};
  font-weight: ${({ weight }) => weight};
`;
export const MainText = styled.p`
  font-size: 48px;
  line-height: 1.2em;
  letter-spacing: 0px;
  font-weight: 300;
  text-align: center;
`;
const Header = () => {
  return (
    <Container style={{ backgroundColor: "white" }}>
      <Wrapper id="header-wrapper">
        {/* <Parallax y={[0, 0]} tagOuter="figure"> */}
        <div
          style={{
            minHeight: "250px",
            minWidth: "250px",

            height: "50vh",
            width: "50vh",
            borderRadius: "100%",
            background: "#a2bdbe",
            margin: "0",
          }}
        ></div>
        <DateContainer>
          <MainText size="88px" weight="700">
            Nos casamos!
          </MainText>
          <Text weight="200">12 . 11 . 22</Text>
        </DateContainer>
        {/* </Parallax> */}
      </Wrapper>
    </Container>
  );
};

export default Header;
