import styled from "@emotion/styled";
import { Column, Container, Logo, StyledLink, Text } from "../common.styles";
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
    <>
      <Container minHeight="55vh" justify="center">
        <TextWrapper>
          <MainText>Ceremonia y Fiesta</MainText>
          <Text size="1.5rem" margin="30px 0 0 0">
            Se acerca el gran dรญa, y no hay nada mรกs lindo para nosotros que
            poder compartirlo con todos ustedes
          </Text>
          <Countdown />
        </TextWrapper>
      </Container>
      <Container minHeight="55vh" bg="white" justify="center">
        <Text size="1.5rem">12 de noviembre</Text>

        <Text size="2rem" margin="30px 0 0 0">
          ๐ TOMATE ๐
        </Text>
        <Column gap=".5rem">
          <Text size="1.5rem">El Salvador 4676, CABA</Text>
          <StyledLink href="https://www.instagram.com/tomate.estacion/?hl=es">
            <Logo src={ig} alt="Instagram Tomate"></Logo>
          </StyledLink>
        </Column>
        <Text size="2rem" weight="400" margin="20px 0 0 0">
          11:30 hs. puntual
        </Text>
        <Text size="1.5rem" weight="300" margin="40px 0 0 0">
          Dress code formal ๐ฐ๐ปโโ๏ธ๐คต๐ผโโ๏ธ
        </Text>
      </Container>
    </>
  );
};

export default Ubicacion;
