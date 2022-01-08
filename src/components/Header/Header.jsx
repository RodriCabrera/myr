import Countdown from "../Countdown";
import { Container, DateContainer, ImageWrapper } from "./Header.styles";

const Header = () => {
  return (
    <Container>
      <ImageWrapper
        imgUrl={
          "https://images.pexels.com/photos/146083/pexels-photo-146083.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        }
      >
        <DateContainer>
          <h3>8 de abril de 2022</h3>
        </DateContainer>
      </ImageWrapper>

      <div>
        <Countdown />
      </div>
    </Container>
  );
};

export default Header;
