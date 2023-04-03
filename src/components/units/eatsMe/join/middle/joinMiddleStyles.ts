import styled from "@emotion/styled";
const breakpoints = [576, 800, 1200];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);
// ${mq[0]} {
//   font-size: 50px;
// }

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${mq[2]} {
    height: calc(100vh - 80px);
    justify-content: flex-start;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  padding: 30px 50px;
  background-color: white;
  border: 1px solid #333333;
  ${mq[2]} {
    width: 100%;
    border: none;
    padding: 50px 60px;
  }
  ${mq[0]} {
    padding: 30px 5vw;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: flex-end;

  > h1 {
    font-size: 30px;
    margin-right: 18px;
  }

  > span {
    font-size: 16px;
  }
`;

export const DivideLine = styled.div`
  width: 100%;
  border-bottom: 1px solid #a4a4a4;
  margin: 14px 0 30px 0;
`;
export const PwdForm = styled.form`
  display: flex;
  flex-direction: column;
`;
export const PasswordBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  > span {
    font-size: 20px;
  }

  > input {
    width: 400px;
    height: 40px;
    margin-top: 10px;
    padding: 10px;
    background-color: #f5f5f5;
  }

  > p {
    color: #fa5c37;
    font-size: 12px;
    margin: 2px 0 20px;
  }
`;

export const NicknameBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto 30px;

  > span {
    font-size: 20px;
  }
  > div {
    > input {
      width: 400px;
      height: 40px;
      margin-top: 10px;
      padding: 10px;
      background-color: #f5f5f5;
    }

    > button {
      width: 80px;
      height: 40px;
      color: white;
      font-size: 14px;
      background-color: #a5a5a5;
      cursor: pointer;
    }
  }

  > p {
    color: #fa5c37;
    font-size: 12px;
    margin: 2px 0;
  }
`;

export const BtnBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    font-size: 12px;
    color: #a5a5a5;

    > button {
      all: unset;
      margin-left: 10px;
      color: black;
      border-bottom: 1px solid black;
      cursor: pointer;
    }
  }
`;

export const JoinBtn = styled.button<{ isActive?: boolean }>`
  width: 300px;
  height: 50px;
  color: white;
  background-color: ${({ isActive }) =>
    isActive === true ? "#fbb240" : "#A5A5A5"};
  text-align: center;
  margin-bottom: 10px;
  cursor: pointer;
`;
