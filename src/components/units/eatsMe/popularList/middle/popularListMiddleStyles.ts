import styled from "@emotion/styled";
const breakpoints = [576, 800, 1200];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
  margin-top: 40px;

  ${mq[2]} {
    flex-direction: column;
    margin-top: 0;
    gap: 0;
  }
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  width: calc(60% - 10px);
  height: 755px;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  ${mq[2]} {
    padding: 0 20px;
    width: 100%;
    height: 359px;
    overflow: auto;
    ::-webkit-scrollbar {
      display: none;
    }
  }
  ${mq[0]} {
    height: 399px;
  }
`;

export const StoreBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  width: 340px;
  padding: 16px;
  cursor: pointer;
  ${mq[2]} {
    position: relative;
    padding: 0;
    width: calc(50% - 10px);
  }
  @media (max-width: 880px) {
    width: 100%;
  }
`;

export const StoreCont = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0 14px;
  & > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 180px;
    ${mq[2]} {
      justify-content: flex-start;
      gap: 8px 0;
      padding: 8px 0;
      width: calc(100% - 175px);
    }
  }
`;
export const RatingBox = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 10px 0;
  justify-content: space-between;
  align-items: flex-start;
  ${mq[2]} {
    flex-direction: row;
  }
`;

export const Rating = styled.span`
  font-size: 30px;
  font-weight: bold;
  color: #fbb240;
  ${mq[2]} {
    font-size: 24px;
  }
`;

export const FoodImg = styled.img`
  width: 120px;
  height: 120px;
  object-fit: contain;
  ${mq[2]} {
    width: 150px;
    height: 150px;
  }
`;

export const Img = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  margin-right: 4px;
`;

export const StoreName = styled.div`
  display: flex;
  flex-direction: row;

  & > span {
    line-height: 24px;
    font-size: 18px;
    ${mq[2]} {
      font-size: 16px;
    }
  }
`;
export const TimeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px 0;
  flex-wrap: wrap;
  margin-left: 3px;
  span {
    font-size: 12px;
    color: #333333;
    font-weight: 700;
  }
  ${mq[2]} {
    flex-direction: row;
    gap: 8px 15px;
  }
`;
export const TimeInfoBox = styled.div`
  display: flex;
  flex-direction: row;

  & > div {
    font-size: 12px;
    color: #333333;
    margin-right: 18px;
  }
`;

export const StoreInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 6px;

  ${mq[2]} {
    position: absolute;
    left: 164px;
    bottom: 8px;
    margin-top: 0;
  }

  & > div {
    display: flex;
    flex-direction: row;
    line-height: 26px;

    & > span {
      font-size: 12px;
    }
  }
`;

export const MapBox = styled.div`
  width: calc(40% - 10px);
  height: 600px;
  overflow: hidden;

  ${mq[2]} {
    padding: 20px;
    width: 100%;
    height: 445px;
  }
`;
