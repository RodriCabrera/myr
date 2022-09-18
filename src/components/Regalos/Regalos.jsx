import { useState } from "react";
import Button from "../Button";
// import { Container } from "../common.styles";
import ModalCuenta from "../ModalCuenta";
import ModalCash from "../ModalCuenta/ModalCash";
import plantas from "../../assets/plantas.jpeg";
import styled from "@emotion/styled";

const Container = styled.div`
  padding: ${({ padding }) => padding || "1.5rem"};
  min-height: ${({ minHeight }) => minHeight};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  justify-content: ${({ justify }) => justify};
  background-color: ${({ bg }) => bg || "#f5f8f8"};
  background-image: url(${plantas});
  background-size: 900px;
  background-repeat: no-repeat;
  @media (max-width: 800px) {
    background-size: 130%;
  }
`;
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  justify-content: center;
  font-size: 3rem;
  padding: 2rem;
  padding-bottom: 0;
`;
const Text = styled.p`
  font-weight: ${({ weight }) => weight || 300};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};

  line-height: 1.2em;
  letter-spacing: 0px;
  text-align: center;
  @media (max-width: 800px) {
    font-size: 2rem;
  }
`;
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
    <Container minHeight="80vh" justify="center" padding="0">
      <TextWrapper>
        <Text>¿Querés hacernos un regalo?</Text>
      </TextWrapper>
      <Button
        bg="#efdeda"
        handler={handleCuentaClick}
        margin="1rem"
        size="1rem"
      >
        Datos cuenta bancaria
      </Button>
      <Button bg="#efdeda" handler={handleCashClick} margin="1rem" size="1rem">
        Efectivo
      </Button>

      {showCashModal && <ModalCash handler={handleCashClick} />}
      {showCuentaModal && <ModalCuenta handler={handleCuentaClick} />}
    </Container>
  );
};

export default Regalos;
