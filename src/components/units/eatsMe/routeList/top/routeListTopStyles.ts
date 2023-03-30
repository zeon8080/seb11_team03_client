import styled from "@emotion/styled";
const breakpoints = [576, 800, 1200];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);
// ${mq[0]} {
//   font-size: 50px;
// }

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  height: 100px;
  background-color: #f5f5f5;
  ${mq[2]} {
    justify-content: flex-start;
    gap: 0 20px;
    height: auto;
    padding: 10px 20px;
    margin: 20px 20px 15px;
  }
  ${mq[0]} {
    gap: 0 5px;
    padding: 10px;
    margin: 10px 0 0;
  }
`;

export const LocationWrapper = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 140px;
  height: 60px;
  background: #fff;
  cursor: pointer;
  ${mq[2]} {
    min-width: 110px;
    height: 40px;
  }

  & > div:first-of-type {
    width: calc(100% - 34px);
    text-align: center;
    font-weight: 500;
    font-size: 18px;
    ${mq[2]} {
      font-size: 16px;
    }
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
    left: -20px;
    z-index: 1;
    cursor: pointer;
    ${mq[2]} {
      left: 0px;
    }
  }
`;

export const Arrow = styled.div`
  width: 24px;
  height: 24px;
  background-image: url("/arrow_down.webp");
`;

export const SearchBar = styled.input`
  width: 810px;
  height: 60px;
  background-color: #fff;
  padding: 0 15px;
  font-size: 18px;
  ${mq[2]} {
    height: 40px;
    width: calc(100% - 300px);
    font-size: 16px;
  }
  ${mq[0]} {
    min-width: 180px;
    width: calc(100% - 250px);
  }
`;

export const routeWriteBtn = styled.button`
  width: 150px;
  height: 60px;
  font-weight: 700;
  font-size: 20px;
  background: #fbb240;
  border: none;
  color: #ffffff;
  cursor: pointer;
  ${mq[2]} {
    height: 40px;
    width: 125px;
    font-size: 18px;
  }
  ${mq[0]} {
    min-width: 70px;
    width: 100px;
    font-size: 16px;
  }
`;
