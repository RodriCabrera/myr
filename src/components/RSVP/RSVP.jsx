import { Fade } from "react-reveal";
import { Container, RSVPButton } from "./RSVP.styles";

const RSVP = () => {
  return (
    <>
      <Container>
        <Fade top>
          <RSVPButton
            href="https://forms.gle/RNrsu13DC4V16AP87"
            target="_blank"
          >
            Confirmar asistencia
          </RSVPButton>
        </Fade>
      </Container>
    </>
  );
};

export default RSVP;
