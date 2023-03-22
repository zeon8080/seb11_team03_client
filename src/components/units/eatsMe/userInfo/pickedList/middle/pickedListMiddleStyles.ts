import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 684px;
`;

export const Title = styled.span`
  font-size: 35px;
  font-weight: bold;
  color: black;
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
  margin: 20px 0;
  padding: 0 114px;
`;

export const StoreBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  width: 330px;
  height: 220px;
  padding: 12px;
  margin-bottom: 18px;
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
  width: 140px;
  height: 140px;
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
    font-size: 16px;
    color: black;
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
    margin-right: 10px;
  }
`;

export const StoreInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4px;

  & > div {
    display: flex;
    flex-direction: row;
    line-height: 26px;

    & > span {
      font-size: 12px;
      color: black;
    }
  }
`;
