import styled from "@emotion/styled";
import { Modal } from "antd";
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
  align-items: center;
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
  width: 100%;
  font-size: 30px;
`;

export const DivideLine = styled.div`
  width: 100%;
  border-bottom: 1px solid #a4a4a4;
  margin: 14px 0 30px 0;
`;

export const EmailBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  > span {
    font-size: 20px;
  }

  > input {
    width: 400px;
    height: 50px;
    margin-top: 10px;
    padding: 10px;
    background-color: #f5f5f5;
  }

  > p {
    color: #fa5c37;
    font-size: 12px;
    margin: 2px 0;
  }
`;

export const SearchBtn = styled.button`
  width: 400px;
  height: 50px;
  margin-bottom: 16px;
  font-size: 20px;
  font-weight: bold;
  color: white;
  background-color: #fbb240;
  cursor: pointer;
`;

export const ModalBtn = styled(Modal)`
  .ant-btn-primary {
    background-color: #fbb240;
  }

  .ant-btn-default {
    background-color: white;
    color: black;
  }

  .ant-btn-primary:hover {
    background-color: #fbb240;
    border-color: black;
    color: white;
  }

  .ant-btn-default:hover {
    background-color: white;
    border-color: black;
    color: black;
  }
`;

export const ModalCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 30px 0;

  > img {
    width: 30px;
    height: 30px;
    object-fit: contain;
    margin-right: 20px;
  }

  > span {
    line-height: 30px;
    text-align: center;
  }
`;
