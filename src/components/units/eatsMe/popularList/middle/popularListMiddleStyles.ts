import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 2px 6px 2px rgba(60, 64, 67, 0.15),
    0px 1px 2px rgba(60, 64, 67, 0.3);
  border-radius: 15px;
  background-color: white;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const StoreBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 624px;
`;

export const StoreCont = styled.div`
  display: flex;
  flex-direction: row;
  width: 300px;
  height: 150px;
  background-color: #f5f5f5;
`;

export const Rating = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: #fbb240;
  text-shadow: -1px 0px #000000, 0px 1px #000000, 1px 0px #000000,
    0px -1px #000000;
`;

export const FoodImg = styled.img`
  width: 120px;
  height: 120px;
  object-fit: contain;
  margin-right: 10px;
`;

export const StoreImg = styled.img`
  width: 20px;
  height: 20px;
  object-fit: contain;
`;

export const MapBox = styled.div`
  width: 480px;
  height: 600px;
  background-color: gray;
`;
