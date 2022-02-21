import { Fade } from "react-reveal";
import Button from "../Button";
import { Container, Header, Text, TextWrapper } from "./RSVP.styles";

const RSVP = () => {
  const handleClick = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSfM0UDgqm5bIKiOlWRrorppaCFfXZpo9M-SQl_ZpmejXCC13A/viewform"
    );
  };
  return (
    <Fade left>
      <Container>
        <Header>Confirmar asistencia</Header>
        <TextWrapper>
          <Text>Nos encantaría que seas parte de nuestra fiesta!</Text>
          <Text>
            Por favor, confirmanos tu asistencia antes del 8 de marzo.
          </Text>
          <Text>
            Usá este mismo formulario para contarnos si requerís un menú
            especial
          </Text>
        </TextWrapper>
        <Button handler={handleClick} bg="#9bf6ff">
          Ir al formulario
        </Button>
      </Container>
    </Fade>
  );
};

export default RSVP;
