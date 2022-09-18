import styled from "@emotion/styled";
import { Container, Logo, Row, StyledLink, Text } from "../common.styles";
import Countdown from "../Countdown";
import { MainText } from "../Header/Header";
import ig from "../../assets/ig.png";
const TextWrapper = styled.div`
  width: 100%;
  max-width: 700px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Ubicacion = () => {
  return (
    <Container minHeight="80vh" justify="center">
      <TextWrapper>
        <MainText>Ceremonia y Fiesta</MainText>
        <Text size="1.5rem" margin="30px 0 0 0">
          Se acerca el gran día, y no hay nada más lindo para nosotros que poder
          compartirlo con todos ustedes
        </Text>
        <Countdown />
      </TextWrapper>
      <div>
        <Text size="2rem" margin="30px 0 0 0">
          🍅 TOMATE
        </Text>
        <Row gap=".5rem">
          <Text size="1.5rem">El Salvador 4676, CABA</Text>
          <StyledLink href="https://www.instagram.com/tomate.estacion/?hl=es">
            <Logo src={ig} alt="Instagram Tomate"></Logo>
          </StyledLink>
        </Row>
        <Text size="2rem" weight="500" margin="20px 0 0 0">
          20:30 hs. puntual
        </Text>
      </div>
    </Container>
  );
};

export default Ubicacion;
