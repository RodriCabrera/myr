import React from "react";
import { Container, Text } from "../common.styles";
import { TextWrapper } from "../RSVP/RSVP.styles";
// const Container = styled.div`
//   padding: 2rem;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: space-evenly;
//   border: none;
//   gap: 2rem;
// `;
const Dresscode = () => {
  return (
    <div>
      <Container minHeight="40vh" justify="center" bg="none">
        <Text size="2rem">¡Importante!</Text>
        <TextWrapper>
          {/* <Text size="2rem">
            En caso de pronostico de lluvia vamos a avisar con cinco días de
            anticipación para mover el festejo a otro día.
          </Text> */}
          <Text size="1.5rem">
            Ante pronóstico de lluvia tendremos que posponer el evento 😓
          </Text>
          <Text size="1.3rem">
            ¡Pero que no cunda el pánico! Avisaremos al menos cinco días antes
          </Text>
        </TextWrapper>
      </Container>
    </div>
  );
};

export default Dresscode;
