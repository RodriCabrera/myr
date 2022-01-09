import styled from "@emotion/styled";

export const Container = styled.section`
  height: 100vh;
  background-color: lightgoldenrodyellow;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;
export const ImageWrapper = styled.div`
  background-image: ${(props) => `url(${props.imgUrl})`};
  background-size: cover;
  background-position: 80% 25%;
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
export const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  justify-content: center;
  color: white;
  font-size: 3rem;
  background-color: #ffffff40;
  backdrop-filter: blur(1px);
  border-radius: 3px;
  padding: 2rem;
`;
