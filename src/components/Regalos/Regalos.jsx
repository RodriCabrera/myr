import { useState } from "react";
import Button from "../Button";
import ModalCuenta from "../ModalCuenta";
import { Container, Text, Title } from "./Regalos.styles";

const Regalos = () => {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal((prevState) => !prevState);
    console.log("CLCKEADO");
  };
  return (
    <Container>
      <Title>¿Querés hacernos un regalo?</Title>
      <Text>
        ¡Con tu sola presencia nos basta! Pero si tenés ganas de ayudarnos con
        nuestra luna de miel, podes hacer un depósito en la siguiente cuenta:
      </Text>
      <Button bg="#f4ffb2" handler={handleClick}>
        Datos cuenta bancaria
      </Button>
      {showModal && <ModalCuenta handler={handleClick} />}
    </Container>
  );
};

export default Regalos;
