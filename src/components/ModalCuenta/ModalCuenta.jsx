import React, { useState } from "react";
import { CloseButton, Container, DataWrapper } from "./ModalCuenta.styles";
import Button from "../Button";
import styled from "@emotion/styled";
import { Text } from "../common.styles";
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
        <Text>Titular: </Text>
        <Text>CBU: 0140100003402350051326</Text>
        <Text>CUIT: 27-94174162-8</Text>
        <Text>Número de Cuenta: 4023-500513/2</Text>
        <Text>Alias: PERRO.GATO.ZORRO</Text>
        <Text>Banco: Banco Provincia</Text>
        <Button handler={handleClick} bg={clicked ? "" : "#e5c8c2"}>
          {clicked ? "Copiado" : "Copiar CBU"}
        </Button>
      </DataWrapper>
    </>
  );
};

export default ModalCuenta;
