import styled from "@emotion/styled";

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100px;
  background-color: #fbb240;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 1200px;
  height: 100%;
`;

export const Logo = styled.img`
  cursor: pointer;
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
`;

export const LoginBtn = styled.button`
  all: unset;
  font-size: 14px;
  font-weight: bold;
  color: white;
  margin-left: 4px;
`;

export const JoinBtn = styled.button`
  width: 84px;
  height: 32px;
  border: 2px solid white;
  border-radius: 5px;
  font-size: 14px;
  font-weight: bold;
  color: white;
  background-color: #fbb240;
  cursor: pointer;
`;
