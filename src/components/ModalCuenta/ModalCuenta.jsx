import React, { useState } from "react";
import { CloseButton, Container, DataWrapper } from "./ModalCuenta.styles";
import Button from "../Button";
import styled from "@emotion/styled";
const DataLine = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
`;
const ModalCuenta = ({ handler }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    navigator.clipboard.writeText("0140100003402350051326");
    setTimeout(() => {
      setClicked(false);
    }, 2000);
  };

  return (
    <>
      <Container onClick={handler}></Container>
      <DataWrapper>
        <CloseButton onClick={handler} />
        <DataLine>Titular: </DataLine>
        <DataLine>CBU: 0140100003402350051326</DataLine>
        <DataLine>CUIT: 27-94174162-8</DataLine>
        <DataLine>Número de Cuenta: 4023-500513/2</DataLine>
        <DataLine>Alias: PERRO.GATO.ZORRO</DataLine>
        <DataLine>Banco: Banco Provincia</DataLine>
        <Button handler={handleClick} bg={clicked ? "" : "#e5c8c2"}>
          {clicked ? "Copiado" : "Copiar CBU"}
        </Button>
      </DataWrapper>
    </>
  );
};

export default ModalCuenta;
