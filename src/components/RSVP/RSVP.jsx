import Button from "../Button";
import { MainText } from "../Header/Header";
import { Text } from "../Ubicacion/Ubicacion.styles";
import { Container, TextWrapper } from "./RSVP.styles";

const RSVP = () => {
  const handleClick = () => {
    window
      .open
      // "https://docs.google.com/forms/d/e/1FAIpQLSfM0UDgqm5bIKiOlWRrorppaCFfXZpo9M-SQl_ZpmejXCC13A/viewform"
      ();
  };
  return (
    <Container>
      <MainText>Confirmar asistencia</MainText>
      <TextWrapper>
        <Text size="2rem">
          Por favor, confirmanos tu asistencia antes del 12 de octubre.
        </Text>
      </TextWrapper>
      <Button handler={handleClick} bg="#a2bdbe" color="white">
        Ir al formulario
      </Button>
    </Container>
  );
};

export default RSVP;
