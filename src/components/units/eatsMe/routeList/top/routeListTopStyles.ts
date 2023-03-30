import styled from "@emotion/styled";
const breakpoints = [576, 800, 1200];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);
// ${mq[0]} {
//   font-size: 50px;
// }

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 100%;
  padding: 20px 25px 0;
  ${mq[0]} {
    padding: 10px;
  }
`;

export const LocationWrapper = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 140px;
  height: 60px;
  background: #f5f5f5;
  cursor: pointer;

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
  cursor: pointer;
  ${mq[2]} {
    left: 24px;
    width: 140px;
  }
  ${mq[0]} {
    top: 80px;
    left: 10px;
  }
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
  ${mq[1]} {
    width: 90px;
    font-size: 18px;
  }
`;
