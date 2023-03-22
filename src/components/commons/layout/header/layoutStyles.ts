import styled from "@emotion/styled";

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 80px;
  background-color: #fbb240;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 1200px;
  height: 100%;

  & > img {
    width: 160px;
    height: 50px;
    object-fit: contain;
    cursor: pointer;
  }
`;

export const NavBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100px;

  & > button {
    all: unset;
    font-size: 20px;
    font-weight: 500;
    color: white;
    cursor: pointer;

    :hover {
      border-bottom: 2px solid white;
    }
  }
`;

export const BtnWrapper = styled.div`
  width: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const LoginBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  & > img {
    width: 24px;
    height: 24px;
    object-fit: contain;
    margin-right: 4px;
    margin-bottom: 2px;
  }
`;

export const LoginBtn = styled.button`
  all: unset;
  font-size: 14px;
  font-weight: bold;
  height: 32px;
  color: white;
  margin-left: 4px;

  :hover {
    border-bottom: 1px solid white;
  }
`;

export const JoinBtn = styled.button`
  width: 60px;
  height: 32px;
  font-size: 14px;
  font-weight: bold;
  color: white;
  background-color: #fbb240;
  cursor: pointer;

  :hover {
    border-bottom: 1px solid white;
  }
`;
