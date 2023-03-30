import styled from "@emotion/styled";
const breakpoints = [576, 800, 1200];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  ${mq[2]} {
    padding: 20px;
  }
  ${mq[0]} {
    padding: 10px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 0 10px;
  width: 100%;
  background-color: white;
  position: relative;
`;

export const SelectBox = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 60px;
  background-color: #f5f5f5;

  & > div:first-of-type {
    font-weight: 500;
    font-size: 18px;
  }

  &:focus > div:nth-of-type(2) {
    background-image: url("/arrow_up.webp");
  }

  & + div {
    display: none;
  }

  &:focus + div {
    display: block;
    position: absolute;
    top: 85px;
    left: -45px;
    ${mq[2]} {
      width: 140px;
      left: 0;
      top: 75px;
    }
  }
`;

export const SubSelectBox = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 60px;
  background-color: #f5f5f5;
  ${mq[1]} {
    width: 90px;
  }

  & > div:first-of-type {
    font-weight: 500;
    font-size: 18px;
  }

  &:focus > div:nth-of-type(2) {
    background-image: url("/arrow_up.webp");
  }

  & + div {
    display: none;
  }

  &:focus + div {
    display: block;
    position: absolute;
    top: 85px;
    left: 120px;
    ${mq[2]} {
      width: 140px;
      left: 165px;
      top: 75px;
    }
    ${mq[1]} {
      left: 140px;
    }
    @media (max-width: 560px) {
      left: 19vw;
    }
  }
`;

export const Arrow = styled.div`
  width: 24px;
  height: 24px;
  background-image: url("/arrow_down.webp");
`;
