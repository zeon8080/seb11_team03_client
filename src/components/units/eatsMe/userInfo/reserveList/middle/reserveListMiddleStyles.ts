import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 684px;
  margin-right: 20px;
  margin-bottom: 20px;
  background-color: white;
  border-radius: 15px;
`;

export const Title = styled.span`
  font-size: 35px;
  font-weight: bold;
  color: black;
  margin: 100px 0;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 774px;
  height: 224px;
  background-color: #f5f5f5;
  border-radius: 10px;
  padding: 20px 36px;
  box-shadow: 0px 2px 6px 2px rgba(60, 64, 67, 0.15),
    0px 1px 2px rgba(60, 64, 67, 0.3);
`;

export const ReserveBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 30px;
`;

export const FoodImg = styled.img`
  width: 184px;
  height: 184px;
  object-fit: contain;
`;

export const Img = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
  margin-right: 8px;
`;

export const Align = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  font-size: 18px;
  margin-bottom: 15px;

  & > span {
    color: black;
  }
`;

export const ScheduleBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 500px;
`;

export const ScheduleCont = styled.div`
  display: flex;
`;

export const Date = styled.span`
  line-height: 40px;
  text-align: center;
  font-size: 16px;
  width: 144px;
  height: 40px;
  background-color: #ff6b3f;
  color: white;
  border-radius: 5px;
`;

export const Time = styled.span`
  line-height: 40px;
  text-align: center;
  font-size: 16px;
  width: 62px;
  height: 40px;
  background-color: #ff6b3f;
  color: white;
  border-radius: 5px;
  margin-left: 10px;
`;

export const EditBtn = styled.button`
  all: unset;
  line-height: 40px;
  text-align: center;
  font-size: 16px;
  width: 70px;
  height: 40px;
  border-radius: 5px;
  color: white;
  background-color: black;
  margin-left: 10px;
  cursor: pointer;
`;
