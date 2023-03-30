import styled from "@emotion/styled";

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 45px;
  margin-top: 30px;
  background: white;
`;

export const MapWrapper = styled.article`
  position: sticky;
  width: 460px;
  height: 645px;
  top: 17vh;
  right: 0px;
`;

export const SelectWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 450px;
  height: 85px;
  margin: 0 auto 42px;
`;

export const StartSelect = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 160px;
  height: 60px;
  background: #f5f5f5;
  border-radius: 10px;

  & > div:first-of-type {
    width: calc(100% - 34px);
    text-align: center;
    font-weight: 500;
    font-size: 18px;
  }
`;

// prettier-ignore
export const StartArrow = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${(props: { isToggle: boolean }) => props.isToggle ? "/arrow_up.webp" : "/arrow_down.webp"});
`;

export const StartSelectorWrapper = styled.div`
  display: ${(props: { isToggle: boolean }) =>
    props.isToggle ? "block" : "none"};
  position: absolute;
  top: 80px;
  left: -35px;
  z-index: 1;
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
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 160px;
  height: 60px;
  background: #f5f5f5;
  border-radius: 10px;

  & > div:first-of-type {
    width: calc(100% - 34px);
    text-align: center;
    font-weight: 500;
    font-size: 18px;
  }
`;

// prettier-ignore
export const EndArrow = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${(props: { isToggle: boolean }) => props.isToggle ? "/arrow_up.webp" : "/arrow_down.webp"});
`;

export const EndSelectorWrapper = styled.div`
  display: ${(props: { isToggle: boolean }) =>
    props.isToggle ? "block" : "none"};
  position: absolute;
  top: 80px;
  right: -35px;
  z-index: 1;
`;
