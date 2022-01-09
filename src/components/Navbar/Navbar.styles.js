import styled from "@emotion/styled";
import { FiMenu, FiX } from "react-icons/fi";

export const Container = styled.div`
  height: 64px;
  position: fixed;

  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  z-index: 2;
`;
export const Logo = styled.h2`
  font-family: "Reenie Beanie";
  font-size: 4rem;
  padding-left: 1rem;
`;
export const MenuButton = styled(FiMenu)`
  font-size: 2rem;
  margin-right: 1rem;
  padding: 4px;
  cursor: pointer;
  background-color: #ffffff30;
  backdrop-filter: blur(3px);
  border-radius: 4px;
`;
export const CloseButton = styled(FiX)`
  font-size: 2rem;
  margin-right: 1rem;
  padding: 4px;
  cursor: pointer;
  background-color: #ffffff30;
  backdrop-filter: blur(3px);
  border-radius: 4px;
`;
export const Menu = styled.div`
  width: 200px;
  background-color: #ffffff80;
  backdrop-filter: blur(3px);
  position: fixed;
  right: ${(props) => (props.openMenu ? "0" : "-300px")};
  top: 64px;
  height: 100%;
  transition: 0.5s all ease;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  padding: 1rem;
`;
export const Link = styled.p`
  cursor: pointer;
`;
