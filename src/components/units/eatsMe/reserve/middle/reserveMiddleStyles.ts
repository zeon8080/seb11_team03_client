import styled from "@emotion/styled";
import { Calendar } from "antd";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 684px;
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
  background-color: #fafafa;
  width: 422px;
  height: 240px;
  padding: 20px;
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
  background-color: #fafafa;
  width: 422px;
  padding: 10px 30px;
  margin-top: 8px;

  & > div {
    font-size: 18px;
    font-weight: bold;
    width: 130px;
    height: 46px;
    background-color: white;
    margin-right: 14px;
    line-height: 46px;
    text-align: center;
  }
`;

export const ReserveBtn = styled.button`
  width: 76px;
  height: 46px;
  font-size: 18px;
  font-weight: bold;
  color: white;
  cursor: pointer;
`;

export const MapBox = styled.div`
  width: 422px;
  height: 315px;
  background-color: #e5e5e5;
  margin-left: 10px;
`;

export const CalendarBox = styled.div`
  margin: 10px 0;
  width: 854px;
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
`;

// export const TimesBtn = styled.button`
//   align-items: center;
//   flex-wrap: wrap;
//   width: 70px;
//   height: 40px;
//   margin: 30px;
//   padding: 6px;
//   cursor: pointer;
//   font-size: 20px;
//   font-weight: bold;

//   :hover {
//     background-color: #fbb240;
//   }
// `;
