import styled from "@emotion/styled";

export const Container = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const RSVPButton = styled.a`
  background-color: aliceblue;
  padding: 1rem;
  font-size: 1.2rem;
  border-radius: 15px;
  border: 0;
  transition: 0.2s all ease;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  text-decoration: none;
  color: inherit;
  cursor: pointer;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
      rgba(0, 0, 0, 0.22) 0px 10px 10px;
  }
  &:active {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  }
`;
