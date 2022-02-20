import styled from "@emotion/styled";

export const Container = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;
export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */
  gap: 1rem;
  justify-content: center;
  color: white;
  font-size: 3rem;
  background-color: #ffffff40;
  backdrop-filter: blur(1px);
  border-radius: 3px;
  padding: 2rem;
  height: 300px;
`;
