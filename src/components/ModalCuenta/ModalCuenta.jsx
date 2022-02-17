import React from "react";
import { CloseButton, Container, DataWrapper } from "./ModalCuenta.styles";

const ModalCuenta = ({ handler }) => {
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
      </DataWrapper>
    </>
  );
};

export default ModalCuenta;
