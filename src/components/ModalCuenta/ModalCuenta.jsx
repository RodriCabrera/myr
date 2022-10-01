import React, { useState } from "react";
import { CloseButton, Container, DataWrapper } from "./ModalCuenta.styles";
import Button from "../Button";
import { Text } from "../common.styles";

const ModalCuenta = ({ handler }) => {
  const [clicked1, setClicked1] = useState(false);
  const [clicked2, setClicked2] = useState(false);

  const handleClick = (num, cbu) => {
    if (num === 1) {
      setClicked1(true);
    } else setClicked2(true);
    navigator.clipboard.writeText(cbu);
    setTimeout(() => {
      if (num === 1) {
        setClicked1(false);
      } else setClicked2(false);
    }, 2000);
  };

  return (
    <>
      <Container onClick={handler} id="container-modal-cuenta"></Container>
      <DataWrapper>
        <CloseButton onClick={handler} />
        <Text>Titular: Maria Eugenia Rey Romero</Text>
        <Text>CBU: 0170165040000006030524</Text>
        <Text>CUIT: 27-19025279-0</Text>
        <Text>Número de Cuenta: 165-60305/2</Text>
        <Text>Alias: mariaeugenia.rey</Text>
        <Text>Banco: BBVA</Text>
        <Button
          handler={() => handleClick(1, "0170165040000006030524")}
          bg={clicked1 ? "" : "#e5c8c2"}
          margin="0 0 25px 0"
          padding="10px"
          size="1rem"
        >
          {clicked1 ? "Copiado" : "Copiar CBU"}
        </Button>
        <Text>Titular: Rodrigo Cabrera</Text>
        <Text>CBU: 0720195688000001959190</Text>
        <Text>CUIT: 20-35275254-2</Text>
        <Text>Número de Cuenta: 195-019591/9</Text>
        <Text>Alias: RODRIGO.CABRERA</Text>
        <Text>Banco: Santander</Text>
        <Button
          handler={() => handleClick(2, "0720195688000001959190")}
          bg={clicked2 ? "" : "#c2e5d2"}
          padding="10px"
          size="1rem"
        >
          {clicked2 ? "Copiado" : "Copiar CBU"}
        </Button>
      </DataWrapper>
    </>
  );
};

export default ModalCuenta;
