import { useState } from "react";
import {
  CloseButton,
  Container,
  Link,
  Menu,
  MenuButton,
} from "./Navbar.styles";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const switchMenu = () => setOpenMenu((prevState) => !prevState);
  return (
    <>
      <Container>
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
