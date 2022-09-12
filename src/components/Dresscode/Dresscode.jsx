import styled from "@emotion/styled";
import React from "react";
import { MainText } from "../Header/Header";
import { TextWrapper } from "../RSVP/RSVP.styles";
import { Text } from "../Ubicacion/Ubicacion.styles";
const Container = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  /* background-color: red; */
  border: none;
  gap: 2rem;
  /* height: 50vh; */
`;
const Dresscode = () => {
  return (
    <div>
      <Container>
        <MainText>Dress code</MainText>
        <TextWrapper>
          <Text size="2rem">Insertar text sobre el dress code del evento</Text>
        </TextWrapper>
      </Container>
    </div>
  );
};

export default Dresscode;
