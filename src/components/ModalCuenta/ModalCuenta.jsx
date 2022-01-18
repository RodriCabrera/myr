import React from "react";
import { CloseButton, Container, DataWrapper } from "./ModalCuenta.styles";

const ModalCuenta = ({ handler }) => {
  return (
    <>
      <Container onClick={handler}></Container>
      <DataWrapper>
        <CloseButton onClick={handler} />
        <p>Titular: Nombre del titular</p>
        <p>CBU: 12412415125120380019</p>
        <p>CUIT: 20-333333333-9</p>
        <p>Número de Cuenta:111122223333</p>
        <p>Alias: pato.goma.flotante</p>
        <p>Banco: Santander</p>
      </DataWrapper>
    </>
  );
};

export default ModalCuenta;
