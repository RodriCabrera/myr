import React, { useState } from "react";
import { CloseButton, Container, DataWrapper } from "./ModalCuenta.styles";
import Button from "../Button";
import styled from "@emotion/styled";
const DataLine = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
`;
const ModalCash = ({ handler }) => {
  // const [clicked, setClicked] = useState(false);
  // const handleClick = () => {
  //   setClicked(true);
  //   navigator.clipboard.writeText("0140100003402350051326");
  //   setTimeout(() => {
  //     setClicked(false);
  //   }, 2000);
  // };

  return (
    <>
      <Container onClick={handler}></Container>
      <DataWrapper>
        <CloseButton onClick={handler} />
        <DataLine>
          El día del evento podés acercarnos un sobre a nosotros o a nuestros
          padres{" "}
        </DataLine>
      </DataWrapper>
    </>
  );
};

export default ModalCash;
