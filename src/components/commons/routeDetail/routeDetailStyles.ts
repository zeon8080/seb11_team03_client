import styled from "@emotion/styled";

export const Container = styled.div`
  position: relative;
  margin-bottom: 30px;
  background-color: white;
`;

export const TopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 600px;
  padding: 8px;
`;

export const HeartImg = styled.img`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 8px;
  right: 8px;
  cursor: pointer;
`;

export const UserInfoWBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90px;

  & > div:last-of-type {
    margin-top: 8px;
    font-weight: 500;
    font-size: 12px;
  }
`;

export const UserImg = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: flex-start;
  max-width: 194px;
  margin: 0 auto;
`;

export const RouteTitle = styled.div`
  word-break: break-all;
  font-weight: 600;
  font-size: 14px;
`;

export const CreateAt = styled.div`
  margin-top: 2px;
  align-self: flex-end;
  font-size: 12px;
  text-align: end;
  color: #999999;
`;

export const LocationBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 202px;
  height: 46px;
  margin-right: 65px;
`;

export const StartEndLocation = styled.div`
  width: 70px;
  text-align: center;
  & div {
    font-weight: 500;
    font-size: 14px;
  }
`;

export const ListArrowImg = styled.div`
  width: 45px;
  height: 45px;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const ArrowDownImg = styled.img`
  position: absolute;
  width: 26px;
  height: 26px;
  bottom: 8px;
  right: 8px;
  cursor: pointer;
`;

export const DivideLine = styled.div`
  width: 97%;
  margin: 0 auto 18px;
  border-bottom: 1px solid #e5e5e5;
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 18px;
`;

export const RestaurantBox = styled.div`
  display: flex;
  flex-direction: row;
`;

export const RestaurantCircle = styled.div`
  padding: 2px 0;
  display: flex;
  flex-direction: column;

  & > img {
    width: 12px;
    height: 42px;
  }

  & > img:first-of-type {
    width: 12px;
    height: 12px;
  }
`;

export const RestaurantName = styled.div`
  margin-left: 10px;
  & > div {
    margin-bottom: 25px;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
  }
`;
