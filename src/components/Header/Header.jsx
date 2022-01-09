import Parallax from "react-scroll-parallax/cjs/components/Parallax";
import Countdown from "../Countdown";
import { Container, DateContainer, ImageWrapper } from "./Header.styles";

const Header = () => {
  return (
    <Container>
      <ImageWrapper
        id="imageWrapper"
        imgUrl={
          "https://images.pexels.com/photos/146083/pexels-photo-146083.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        }
      >
        <Parallax y={[-30, 20]} tagOuter="figure">
          <DateContainer>
            <h2>Eli y Lucho</h2>
            <h3>8 . 4 . 22</h3>
          </DateContainer>
        </Parallax>
      </ImageWrapper>

      <div>
        <Countdown />
      </div>
    </Container>
  );
};

export default Header;
