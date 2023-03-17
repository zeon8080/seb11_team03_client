import styled from "@emotion/styled";

export const Container = styled.header`
  width: 100vw;
  height: 100px;
  background-color: #fbb240;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 1200px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ImgWrapper = styled.div`
  display: flex;
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
`;

export const LoginBtn = styled.button`
  all: unset;
  font-size: 14px;
  font-weight: bold;
  margin-left: 4px;
`;

export const JoinBtn = styled.button`
  width: 84px;
  height: 32px;
  border: 2px solid #fbb240;
  border-radius: 5px;
  font-size: 14px;
  font-weight: bold;
`;
