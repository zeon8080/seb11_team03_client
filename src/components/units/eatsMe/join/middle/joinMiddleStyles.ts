import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  padding: 30px 50px;
  background-color: white;
  border: 1px solid #333333;
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

export const EmailBox = styled.div`
  display: flex;
  flex-direction: column;

  > span {
    font-size: 20px;
  }

  > input {
    width: 400px;
    height: 40px;
    margin-top: 10px;
    padding: 10px;
  }

  > button {
    width: 400px;
    height: 40px;
    margin: 15px 0 30px 0;
    color: white;
    cursor: pointer;
  }

  > p {
    color: #fa5c37;
    font-size: 12px;
    margin: 2px 0;
  }
`;

export const AccreditBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin-bottom: 30px;
  color: #333333;
  background-color: #f5f5f5;

  > span {
    font-size: 12px;
  }

  > button {
    all: unset;
    font-size: 12px;
    border-bottom: 1px solid #333333;
    cursor: pointer;
  }
`;

export const TokenBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin: 15px 0;

  > input {
    text-align: center;
    width: 220px;
    height: 40px;
    background-color: white;
    padding: 10px;
  }

  > span {
    width: 32px;
    font-size: 14px;
    color: #fa5c37;
    margin: 0 14px;
  }

  > button {
    width: 50px;
    height: 40px;
    font-size: 14px;
    color: white;
    cursor: pointer;
  }
`;

export const PasswordBox = styled.div`
  margin-bottom: 10px;
  > span {
    font-size: 20px;
  }

  > input {
    width: 400px;
    height: 40px;
    margin-top: 10px;
    padding: 10px;
  }

  > p {
    color: #fa5c37;
    font-size: 12px;
    margin: 2px 0 20px;
  }
`;

export const NicknameBox = styled.div`
  margin-bottom: 30px;

  > span {
    font-size: 20px;
  }
  > div {
    > input {
      width: 298px;
      height: 40px;
      margin: 10px 20px 0 0;
      padding: 10px;
    }

    > button {
      width: 80px;
      height: 40px;
      color: white;
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

  > button {
    width: 300px;
    height: 50px;
    color: white;
    text-align: center;
    margin-bottom: 10px;
    cursor: pointer;
  }

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
