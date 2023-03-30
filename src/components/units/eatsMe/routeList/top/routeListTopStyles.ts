import styled from "@emotion/styled";

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  height: 100px;
`;

export const LocationWrapper = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 140px;
  height: 60px;
  background: #f5f5f5;

  & > div:first-of-type {
    width: calc(100% - 34px);
    text-align: center;
    font-weight: 500;
    font-size: 18px;
  }
`;

// prettier-ignore
export const Arrow = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${(props: { isToggle: boolean }) => props.isToggle ? "/arrow_up.webp" : "/arrow_down.webp"});
`;

export const SelectorWrapper = styled.div`
  display: ${(props: { isToggle: boolean }) =>
    props.isToggle ? "block" : "none"};
  position: absolute;
  top: 85px;
  left: -20px;
  z-index: 1;
`;

export const routeWriteBtn = styled.a`
  width: 150px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  text-decoration: none;
  font-weight: 700;
  font-size: 20px;
  background: #fbb240;
  border: none;
  color: #ffffff;
  cursor: pointer;
`;
