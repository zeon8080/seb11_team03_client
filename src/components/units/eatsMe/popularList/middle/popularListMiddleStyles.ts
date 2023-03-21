import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  box-shadow: 0px 2px 6px 2px rgba(60, 64, 67, 0.15),
    0px 1px 2px rgba(60, 64, 67, 0.3);
  border-radius: 15px;
  background-color: white;
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  width: 624px;
  margin: 20px 0;
`;

export const StoreBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  border-radius: 10px;
  width: 300px;
  height: 180px;
  padding: 6px;
`;

export const StoreCont = styled.div`
  display: flex;
  flex-direction: row;
  & > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 160px;
  }
`;
export const RatingBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Rating = styled.span`
  font-size: 30px;
  font-weight: bold;
  color: #fbb240;
`;

export const FoodImg = styled.img`
  width: 120px;
  height: 120px;
  object-fit: contain;
  margin-right: 10px;
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
  }

  & + span {
    font-size: 12px;
    color: #333333;
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
  width: 480px;
  height: 600px;
  margin: 20px 0;
  background-color: gray;
`;
