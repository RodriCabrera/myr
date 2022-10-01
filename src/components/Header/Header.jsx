import styled from "@emotion/styled";
import { Text } from "../common.styles";
import { Container, DateContainer, Wrapper } from "./Header.styles";
import img from "../../assets/myr-euge.jpeg";
import img2 from "../../assets/IMG_0026.jpeg";
import img3 from "../../assets/mendoza.jpeg";
import img4 from "../../assets/rio.jpeg";
import img5 from "../../assets/cordoba.jpeg";
import img6 from "../../assets/frenc.jpeg";
import img7 from "../../assets/bodega.jpeg";
import { keyframes } from "@emotion/react";

export const MainText = styled.p`
  font-size: 48px;
  line-height: 1.2em;
  letter-spacing: 0px;
  font-weight: 300;
  text-align: center;
`;

const scroll = keyframes`
  0% { transform: translateX(0)}
  100% { transform: translateX(calc(-45vh*7)) }
  `;

const RoundImage = styled.div`
  min-height: 100%;
  animation-name: ${scroll};
  animation-duration: 35s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  min-width: 100%;
  background: ${({ src }) => `rgba(0, 0, 0, 0) url(${src})`};
  backdrop-filter: blur(200px);
  background-position: 50% 40%;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 100%;
`;

const CarrouselContainer = styled.div`
  overflow: hidden;
  display: flex;
  height: 45vh;
  width: 45vh;
`;
const Blur = styled.div`
  position: fixed;
  height: 45vh;
  width: 45vh;
  z-index: 9;
  background-color: #f4e9e624;
  border-radius: 100%;
`;
const Header = () => {
  return (
    <Container style={{ backgroundColor: "white" }}>
      <Wrapper id="header-wrapper">
        <CarrouselContainer>
          <RoundImage src={img}>
            <Blur />
          </RoundImage>
          <RoundImage src={img2}>
            <Blur />
          </RoundImage>
          <RoundImage src={img3}>
            <Blur />
          </RoundImage>
          <RoundImage src={img7}>
            <Blur />
          </RoundImage>
          <RoundImage src={img4}>
            <Blur />
          </RoundImage>
          <RoundImage src={img5}>
            <Blur />
          </RoundImage>
          <RoundImage src={img6}>
            <Blur />
          </RoundImage>
          <RoundImage src={img}>
            <Blur />
          </RoundImage>
        </CarrouselContainer>
        <DateContainer>
          <MainText size="88px" weight="700">
            ¡Nos casamos!
          </MainText>
          <Text weight="200" size="2rem">
            12 . 11 . 22
          </Text>
        </DateContainer>
      </Wrapper>
    </Container>
  );
};

export default Header;
