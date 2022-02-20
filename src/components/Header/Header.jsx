import Parallax from "react-scroll-parallax/cjs/components/Parallax";
import { Container, DateContainer, Wrapper } from "./Header.styles";

const Header = () => {
  return (
    <Container>
      <Wrapper id="imageWrapper">
        <Parallax y={[0, 0]} tagOuter="figure">
          <DateContainer>
            <h2>Eli y Lucho</h2>
            <h4>8 . 4 . 22</h4>
          </DateContainer>
        </Parallax>
      </Wrapper>
    </Container>
  );
};

export default Header;
