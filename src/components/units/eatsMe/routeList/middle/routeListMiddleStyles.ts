import styled from "@emotion/styled";

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  padding: 45px 45px;
  box-shadow: 0px 2px 6px 2px rgba(60, 64, 67, 0.15),
    0px 1px 2px rgba(60, 64, 67, 0.3);
  border-radius: 15px;
`;

export const MapWrapper = styled.article`
  width: 460px;
  margin-left: 50px;
  padding: 50px 0;
  border: 1px solid red;
`;

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 450px;
  height: 85px;
  margin: 0 auto;
`;

export const StartSelect = styled.div`
  width: 160px;
  height: 60px;
  background: #f5f5f5;
  border-radius: 10px;
  font-size: 18px;
`;

export const EndSelect = styled.div`
  width: 160px;
  height: 60px;
  background: #f5f5f5;
  border-radius: 10px;
  font-size: 18px;
`;

export const RouteList = styled.div`
  width: 600px;
  height: 80px;
  background: #f5f5f5;
  border-radius: 10px;
`;
