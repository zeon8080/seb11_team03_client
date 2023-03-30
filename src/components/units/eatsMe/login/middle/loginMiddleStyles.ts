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
  width: 400px;
  margin-bottom: 20px;
  ${mq[2]} {
    margin: 0 auto 20px;
    align-items: center;
  }
  ${mq[0]} {
    width: 100%;
  }
  > input {
    width: 100%;
    height: 50px;
    padding: 10px;
    background-color: #f5f5f5;
  }

  > p {
    color: #fa5c37;
    font-size: 12px;
    margin: 2px 0;
    ${mq[2]} {
      align-self: start;
    }
  }
`;

export const PasswordBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  ${mq[2]} {
    margin: 0 auto;
    align-items: center;
  }
  ${mq[0]} {
    width: 100%;
  }
  > input {
    width: 100%;
    height: 50px;
    padding: 10px;
    background-color: #f5f5f5;
  }

  > p {
    color: #fa5c37;
    font-size: 12px;
    margin: 2px 0 32px;
    ${mq[2]} {
      align-self: start;
    }
  }
`;

export const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > button {
    width: 300px;
    height: 50px;
    margin-bottom: 16px;
    font-size: 20px;
    font-weight: bold;
    color: white;
    background-color: #fbb240;
    cursor: pointer;
  }
`;

export const SuggestBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > div span {
    color: #a5a5a5;
    font-size: 12px;
    margin-right: 15px;
  }

  > div button {
    all: unset;
    font-size: 12px;
    border-bottom: 1px solid black;
    margin-bottom: 10px;
    cursor: pointer;
  }
`;

export const SNSBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  > span {
    font-size: 16px;
  }

  > div img {
    width: 50px;
    height: 50px;
    margin: 8px 8px;
    object-fit: contain;
    cursor: pointer;
    border: 1px solid #e0e0e0;
    border-radius: 50%;
  }
`;
