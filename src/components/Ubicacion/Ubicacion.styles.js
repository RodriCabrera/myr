import styled from "@emotion/styled";

export const Container = styled.div`
  padding-top: 1rem;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fdffb6e6;
`;

export const Text = styled.h3`
  font-size: ${(props) => props.size};
  text-align: center;
`;
