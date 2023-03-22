import styled from "@emotion/styled";
import { Calendar } from "antd";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 684px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0px 2px 6px 2px rgba(60, 64, 67, 0.15),
    0px 1px 2px rgba(60, 64, 67, 0.3);
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const StoreBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #f5f5f5;
  width: 422px;
  height: 240px;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0px 2px 6px 2px rgba(60, 64, 67, 0.15),
    0px 1px 2px rgba(60, 64, 67, 0.3);
`;

export const StoreCont = styled.div`
  display: flex;
  flex-direction: row;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 180px;

    & > span {
      font-size: 18px;
      font-weight: bold;
    }
  }
`;

export const FoodImg = styled.img`
  width: 180px;
  height: 180px;
  object-fit: contain;
  margin-right: 20px;
`;

export const Img = styled.img`
  width: 34px;
  height: 34px;
`;

export const ReserveBox = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #f5f5f5;
  width: 422px;
  padding: 10px 30px;
  margin-top: 8px;
  border-radius: 15px;
  box-shadow: 0px 2px 6px 2px rgba(60, 64, 67, 0.15),
    0px 1px 2px rgba(60, 64, 67, 0.3);

  & > div {
    font-size: 18px;
    font-weight: bold;
    width: 130px;
    height: 46px;
    border-radius: 10px;
    background-color: white;
    margin-right: 14px;
    line-height: 46px;
    text-align: center;
  }

  & > button {
    width: 76px;
    height: 46px;
    font-size: 18px;
    font-weight: bold;
    background-color: #e5e5e5;
    border-radius: 10px;
    cursor: pointer;
  }
`;

export const MapBox = styled.div`
  width: 422px;
  height: 315px;
  background-color: #e5e5e5;
  margin-left: 10px;
  border-radius: 15px;
  box-shadow: 0px 2px 6px 2px rgba(60, 64, 67, 0.15),
    0px 1px 2px rgba(60, 64, 67, 0.3);
`;

export const CalendarBox = styled.div`
  margin: 10px 0;
  width: 854px;
  height: 400px;
  border-radius: 15px;
  box-shadow: 0px 2px 6px 2px rgba(60, 64, 67, 0.15),
    0px 1px 2px rgba(60, 64, 67, 0.3);
`;

export const CalendarStyle = styled(Calendar)`
  .ant-picker-cell.ant-picker-cell-selected:not(
      .ant-picker-cell-range-start
    ):not(.ant-picker-cell-range-end)
    .ant-picker-cell-inner {
    background-color: #fbb240;
  }

  .ant-picker-cell-today .ant-picker-calendar-date {
    background-color: #fbb240;
  }

  .ant-picker-today .ant-picker-cell-inner {
    border-color: #fbb240;
  }
`;
