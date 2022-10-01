import Button from "../Button";
import { Container, Text } from "../common.styles";
import { MainText } from "../Header/Header";
import { TextWrapper } from "./RSVP.styles";

const RSVP = () => {
  const handleClick = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSc8pJMcgGbEojXL3sk78tN5XNv7_W8IBK25XDx1o_oPi1Sx_A/viewform?usp=sf_link  "
    );
  };
  return (
    <Container bg="#f4e9e6" minHeight="55vh" justify="center">
      <MainText>Confirmar asistencia</MainText>
      <TextWrapper>
        <Text size="2rem">
          Por favor, confirmanos tu asistencia antes del 8 de octubre.
        </Text>
      </TextWrapper>
      <Button handler={handleClick} bg="#a2bdbe" color="white">
        Ir al formulario
      </Button>
    </Container>
  );
};

export default RSVP;
