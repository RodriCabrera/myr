import styled from "@emotion/styled";

export const Container = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
export const DateContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: center;
`;
export const ImageWrapper = styled.div`
  background-image: ${(props) => `url(${props.imgUrl})`};
  background-size: cover;
  background-position: 80% 25%;
  height: 80%;
`;
