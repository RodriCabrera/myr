import styled from "@emotion/styled";
import { Container, Text } from "../common.styles";
import img from "../../assets/nieve.jpeg";
import { DateContainer } from "../Header/Header.styles";

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
  /* background-repeat: no-repeat; */
  background-size: cover;
  height: 30vh;
  width: 30vh;
  border-radius: 100%;
  margin: 0;
`;
const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
`;
const Footer = () => {
  return (
    <Container minHeight="60vh" justify="center" bg="#f4e9e6">
      <Wrapper>
        <DateContainer>
          <MainText size="88px" weight="700">
            ¡Muchas gracias!
          </MainText>
          <Text weight="200" size="2rem">
            Nos vemos pronto 🥂
          </Text>
        </DateContainer>
        <RoundImage />
      </Wrapper>
    </Container>
  );
};

export default Footer;
