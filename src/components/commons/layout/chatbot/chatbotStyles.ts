import styled from "@emotion/styled";
const breakpoints = [576, 800, 1200];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);
interface IChatbot {
  isToggle: boolean;
}
export const Container = styled.div<IChatbot>`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  right: ${(props) => (props.isToggle ? "0" : "-100vw")};
  transition: 0.5s;
  width: 450px;
  height: 650px;
  border: 1px solid #e0e0e0;
  background-color: white;
  ${mq[0]} {
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
  }
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
  button {
    cursor: pointer;
    width: 40px;
    height: 40px;
    background: url(/close_wh.webp) no-repeat;
    background-size: contain;
  }
`;
export const Content = styled.div`
  margin-top: auto;
  padding: 10px 0;
`;
export const FAQBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 120px;
  padding: 20px 15px;

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
  }
`;

export const UserText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  > div {
    height: 40px;
    background-color: rgba(251, 178, 64, 0.7);
    line-height: 40px;
    padding: 0 10px;
    margin-right: 10px;
  }
`;

export const ChatInput = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  background-color: #eee;
  margin: 0 15px 15px;
  width: calc(100% - 30px);
  > input {
    width: calc(100% - 45px);
    height: 50px;
    padding: 0 10px;
    background-color: transparent;
  }

  > img {
    width: 32px;
    height: 32px;
    object-fit: contain;
    cursor: pointer;
  }
`;
