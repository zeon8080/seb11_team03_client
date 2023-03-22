import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 810px;
  height: 60px;
  padding: 0 20px;
  background-color: white;

  & > input {
    width: 100%;
    height: 100%;
    font-weight: 500;
    font-size: 18px;
    background-color: white;
  }

  & > img {
    margin-left: 15px;
    width: 30px;
    height: 30px;
  }
`;
