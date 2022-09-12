import styled from "@emotion/styled";
import Countdown from "../Countdown";
import { MainText } from "../Header/Header";
import { Container, Text } from "./Ubicacion.styles";
const TextWrapper = styled.div`
  width: 100%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Ubicacion = () => {
  return (
    <Container>
      <TextWrapper>
        <Text size="2rem">
          Se acerca el gran día, y no hay nada más lindo para nosotros que poder
          compartirlo con todos ustedes!
        </Text>
        <Countdown />
        <MainText>Ceremonia y Fiesta</MainText>
        <Text size="1.5rem">Tomate, El salvador 4676</Text>
        <Text size="1.5rem">20.30 hs puntual</Text>
      </TextWrapper>
    </Container>
  );
};

export default Ubicacion;
