import Parallax from "react-scroll-parallax/cjs/components/Parallax";
import { Container, DateContainer, Wrapper } from "./Header.styles";

const Header = () => {
  return (
    <Container>
      <Wrapper id="imageWrapper">
        <Parallax y={[90, -60]} tagOuter="figure">
          <DateContainer>
            <h2>Eli y Lucho</h2>
            <h3>8 . 4 . 22</h3>
          </DateContainer>
        </Parallax>
      </Wrapper>
    </Container>
  );
};

export default Header;
