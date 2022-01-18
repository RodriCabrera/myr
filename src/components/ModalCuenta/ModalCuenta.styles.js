import styled from "@emotion/styled";
import { FiX } from "react-icons/fi";

export const Container = styled.div`
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100vw;
  z-index: 5;
  background-color: #ffffffe6;
`;
export const CloseButton = styled(FiX)`
  font-size: 2rem;
  margin-right: 1rem;
  padding: 4px;
  cursor: pointer;
`;
export const DataWrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: aliceblue;
  padding: 2rem;
  top: 30%;
  width: 80%;
  padding: 1rem;
  margin: 1rem;
  z-index: 6;
  max-width: 500px;
  gap: 1rem;
`;
