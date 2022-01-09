import styled from "@emotion/styled";

export const Container = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
export const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  justify-content: center;
  color: white;
  font-size: 3rem;
  background-color: #ffffff40;
  backdrop-filter: blur(1px);
  border-radius: 3px;
  width: 500px;
  height: 300px;
  max-width: 700px;
`;
export const ImageWrapper = styled.div`
  background-image: ${(props) => `url(${props.imgUrl})`};
  background-size: cover;
  background-position: 80% 25%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;
`;
