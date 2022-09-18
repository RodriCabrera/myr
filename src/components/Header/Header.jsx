import styled from "@emotion/styled";
import { Text } from "../common.styles";
import { Container, DateContainer, Wrapper } from "./Header.styles";
import img from "../../assets/myr-euge.jpeg";

export const MainText = styled.p`
  font-size: 48px;
  line-height: 1.2em;
  letter-spacing: 0px;
  font-weight: 300;
  text-align: center;
`;

const RoundImage = styled.div`
  min-height: 250px;
  min-width: 250px;
  background: rgba(0, 0, 0, 0) url(${img});

  background-position: 50% 40%;
  background-repeat: no-repeat;
  background-size: 100%;
  height: 45vh;
  width: 45vh;
  border-radius: 100%;
  margin: 0;
`;

const Header = () => {
  return (
    <Container style={{ backgroundColor: "white" }}>
      <Wrapper id="header-wrapper">
        <RoundImage />
        <DateContainer>
          <MainText size="88px" weight="700">
            ¡Nos casamos!
          </MainText>
          <Text weight="200" size="2rem">
            12 . 11 . 22
          </Text>
        </DateContainer>
      </Wrapper>
    </Container>
  );
};

export default Header;
