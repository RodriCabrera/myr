import React, { useState } from "react";
import { CloseButton, Container, DataWrapper } from "./ModalCuenta.styles";
import Button from "../Button";

const ModalCuenta = ({ handler }) => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    console.log("clikeado el de copiar");
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
        <p>Titular: Eliana Maria, Lopez, Martinez</p>
        <p>CBU: 0140100003402350051326</p>
        <p>CUIT: 27-94174162-8</p>
        <p>Número de Cuenta: 4023-500513/2</p>
        <p>Alias: Elmaloma15</p>
        <p>Banco: Banco Provincia</p>
        <Button handler={handleClick} bg={clicked ? "" : "#f7d9ff"}>
          {clicked ? "Copiado" : "Copiar CBU"}
        </Button>
      </DataWrapper>
    </>
  );
};

export default ModalCuenta;
