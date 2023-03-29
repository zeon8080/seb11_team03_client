import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
  height: 650px;
  border: 1px solid black;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  height: 65px;
  background-color: #fbb240;

  > img {
    width: 110px;
    height: 40px;
    object-fit: contain;
    margin-right: 15px;
  }
`;

export const FAQBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 420px;
  height: 120px;
  margin: 20px 15px;

  > div {
    width: 380px;
    height: 40px;
    color: #fbb240;
    background-color: white;
    border: 1.5px solid #fbb240;
    line-height: 40px;
    text-align: center;
    margin: 4px 0;
    border-radius: 5px;
  }
`;

export const ChatBotText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  > img {
    width: 40px;
    height: 40px;
    object-fit: contain;
    margin: 0 10px;
  }

  > div {
    height: 40px;
    background-color: #e5e5e5;
    line-height: 40px;
    padding: 0 10px;
    border-radius: 5px;
  }
`;

export const UserText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  > div {
    height: 40px;
    background-color: #fbb240;
    line-height: 40px;
    padding: 0 10px;
    border-radius: 5px;
    margin-right: 10px;
  }
`;

export const ChatInput = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;

  > input {
    width: 428px;
    height: 50px;
    padding: 0 46px 0 6px;
    border-radius: 5px;
  }

  > img {
    width: 32px;
    height: 32px;
    object-fit: contain;
    position: absolute;
    right: 18px;
    bottom: 10;
    cursor: pointer;
  }
`;
