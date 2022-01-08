import styled from "@emotion/styled";

export const Container = styled.section`
  height: 100vh;
  background-color: lightgoldenrodyellow;
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
  height: 80%;
`;
