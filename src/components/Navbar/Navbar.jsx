import { useState } from "react";
import {
  CloseButton,
  Container,
  Link,
  Logo,
  Menu,
  MenuButton,
} from "./Navbar.styles";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const switchMenu = () => setOpenMenu((prevState) => !prevState);
  return (
    <>
      <Container>
        <Logo>Lucho y Eli</Logo>
        {openMenu ? (
          <CloseButton onClick={switchMenu} />
        ) : (
          <MenuButton onClick={switchMenu} />
        )}
      </Container>
      <Menu openMenu={openMenu}>
        <Link>Opcion 1</Link>
        <Link>Como llegar</Link>
        <Link>Algun etcetera</Link>
        <Link>Otra cosa</Link>
        <Link>Una opcion pero mas larga</Link>
      </Menu>
    </>
  );
};
export default Navbar;
