import styled from "@emotion/styled";
import React from "react";

const NavbarContainer = styled.nav`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 1rem;
  /* background-color: #cb9286; */
`;
const Logo = styled.p`
  font-weight: 600;
  font-size: 30px;
  color: #cb9286;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo>Mariu & Rodri</Logo>
    </NavbarContainer>
  );
};

export default Navbar;
