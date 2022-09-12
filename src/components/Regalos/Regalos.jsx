import { useState } from "react";
import Button from "../Button";
import { MainText } from "../Header/Header";
import ModalCuenta from "../ModalCuenta";
import ModalCash from "../ModalCuenta/ModalCash";
import { Container, Text } from "./Regalos.styles";

const Regalos = () => {
  const [showCuentaModal, setShowCuentaModal] = useState(false);
  const [showCashModal, setShowCashModal] = useState(false);

  const handleCuentaClick = () => {
    setShowCuentaModal((prevState) => !prevState);
  };
  const handleCashClick = () => {
    setShowCashModal((prevState) => !prevState);
  };

  return (
    <Container>
      <MainText>¿Querés hacernos un regalo?</MainText>
      <Text>Si querés hacernos un regalo:</Text>
      <Button bg="#efdeda" handler={handleCuentaClick}>
        Datos cuenta bancaria
      </Button>
      <Button bg="#efdeda" handler={handleCashClick}>
        Efectivo
      </Button>
      {showCuentaModal && <ModalCuenta handler={handleCuentaClick} />}
      {showCashModal && <ModalCash handler={handleCashClick} />}
    </Container>
  );
};

export default Regalos;
