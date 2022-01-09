import { Fade } from "react-reveal";
import { Container } from "./Ubicacion.styles";

const Ubicacion = () => {
  return (
    <Container>
      <Fade>
        <h3 style={{ fontSize: "3rem" }}>"El Abierto Eventos"</h3>
        <h4 style={{ fontSize: "2rem" }}>Av. Triunvirato 6385</h4>
      </Fade>
      <Fade>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14382.334094763874!2d-58.4969530318796!3d-34.559696038100725!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbe73ff3165626ca2!2sEl%20Abierto%20Eventos!5e0!3m2!1ses-419!2sus!4v1641675191504!5m2!1ses-419!2sus"
          style={{ border: 0, width: "60%", height: "550px", padding: "2rem" }}
          title="Map"
          loading="lazy"
        ></iframe>
      </Fade>
    </Container>
  );
};

export default Ubicacion;
