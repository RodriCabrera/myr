import styled from "@emotion/styled";

export const Container = styled.div`
  margin-top: 1rem;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Text = styled.h3`
  font-size: ${(props) => props.size};
  text-align: center;
`;
