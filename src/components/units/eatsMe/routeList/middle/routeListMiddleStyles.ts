import styled from "@emotion/styled";

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 45px;
  margin-top: 30px;
  background: #f5f5f5;
`;

export const MapWrapper = styled.article`
  position: sticky;
  width: 460px;
  height: 645px;
  top: 17vh;
  right: 0px;
`;

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 450px;
  height: 85px;
  margin: 0 auto 42px;
`;

export const StartSelect = styled.div`
  width: 160px;
  height: 60px;
  background: #ffffff;
  font-size: 18px;
  text-align: center;
  line-height: 60px;
  font-weight: 500;
`;

export const ArrowImgWrapper = styled.div`
  width: 85px;
  height: 85px;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const EndSelect = styled.div`
  width: 160px;
  height: 60px;
  background: #ffffff;
  font-size: 18px;
  text-align: center;
  line-height: 60px;
  font-weight: 500;
`;
