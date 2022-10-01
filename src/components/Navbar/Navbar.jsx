import styled from "@emotion/styled";
import React from "react";

const NavbarContainer = styled.nav`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: ${({ justify }) => justify};
  padding: 0.5rem 0;
  margin-bottom: 2rem;
  background-color: ${({ bg }) => bg};
  z-index: 10;
`;
const Logo = styled.p`
  font-weight: 600;
  font-size: 22px;
  color: #cb9286;
`;

const Navbar = () => {
  return (
    <>
      {/* <NavbarContainer justify="space-between" bg="white">
        <Text onClick={() => console.log("CEREMONIA")} padding="0 10px">
          Ceremonia
        </Text>
        <Text onClick={() => console.log("rsvp")} padding="0 10px">
          RSVP
        </Text>
      </NavbarContainer> */}
      <NavbarContainer justify="center" bg="white">
        <Logo onClick={() => console.log("MAIN")}>Mariu & Rodri</Logo>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
