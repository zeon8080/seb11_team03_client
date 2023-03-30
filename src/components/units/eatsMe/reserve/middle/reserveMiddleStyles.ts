import styled from "@emotion/styled";
import { Calendar } from "antd";
const breakpoints = [576, 800, 1200];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);
// ${mq[0]} {
//   font-size: 50px;
// }

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 0 173px;
  ${mq[2]} {
    padding: 0;
  }
  ${mq[1]} {
    height: calc(100vh - 33vw - 60px);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 0 10px;
  width: 100%;
  margin-top: 20px;
  ${mq[2]} {
    margin-top: 0;
    padding: 20px;
  }
  ${mq[1]} {
    .storeWrap {
      position: relative;
    }
  }
  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: calc(50% - 5px);
    ${mq[1]} {
      width: 100%;
    }
  }
`;

export const StoreBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #f5f5f5;
  width: 100%;
  height: 240px;
  padding: 0 20px;
  position: relative;
  ${mq[1]} {
    align-items: flex-start;
    padding: 20px;
    height: auto;
  }
`;

export const StoreCont = styled.div`
  display: flex;
  flex-direction: row;
  ${mq[1]} {
    width: 100%;
    gap: 0 20px;
    background-color: #fff;
  }
  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px 0;
    width: 180px;
    ${mq[1]} {
      padding-top: 15px;
      justify-content: flex-start;
      width: calc(100% - 300px);
    }
  }
`;

export const FoodImg = styled.img`
  width: 180px;
  height: 180px;
  object-fit: contain;
  margin-right: 20px;
  ${mq[1]} {
    width: 210px;
    height: 210px;
    margin-right: 0;
  }
  ${mq[0]} {
    width: 35vw;
    width: 35vw;
  }
`;
export const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px 0;
  width: 100%;
  margin-left: 2px;
  ${mq[1]} {
    margin-right: 0;
    flex-direction: row;
    gap: 0 20px;
  }
  img {
    width: 34px;
    height: 34px;
    object-fit: contain;
  }
  span {
    font-size: 18px;
    font-weight: bold;
    word-break: break-all;
    ${mq[1]} {
      line-height: 34px;
    }
  }
`;

export const Rating = styled.span`
  font-size: 30px;
  font-weight: bold;
  color: #fbb240;
  position: absolute;
  right: 20px;
  top: 30px;
  ${mq[1]} {
    top: 35px;
    right: 30px;
  }
`;

export const ReserveBox = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #f5f5f5;
  width: 100%;
  padding: 10px 30px;
  margin-top: 8px;
  ${mq[1]} {
    position: absolute;
    right: 20px;
    bottom: 20px;
    justify-content: space-between;
    width: calc(100% - 250px);
    padding: 20px;
    margin-top: 0;
    background-color: #fff;
  }
  > div {
    font-size: 18px;
    font-weight: bold;
    width: 130px;
    background-color: white;
    margin-right: 14px;
    line-height: 46px;
    text-align: center;
    ${mq[1]} {
      width: 135px;
      line-height: 50px;
      margin-right: 0;
      background-color: #f5f5f5;
    }
  }
`;

export const ReserveBtn = styled.button<{ isActive?: boolean }>`
  width: 76px;
  line-height: 46px;
  font-size: 18px;
  font-weight: bold;
  color: white;
  background-color: ${({ isActive }) =>
    isActive === true ? "#fbb240" : "#A5A5A5"};
  cursor: pointer;
  ${mq[1]} {
    line-height: 50px;
  }
`;

export const MapBox = styled.div`
  height: 315px;
  background-color: #e5e5e5;
  ${mq[1]} {
    position: fixed;
    bottom: 0;
    left: 0;
    padding: 20px;
    height: calc(100vh - 690px);
  }
`;

export const CalendarBox = styled.div`
  margin: 10px 0;
  width: 100%;
  ${mq[2]} {
    padding: 0 20px;
  }
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
