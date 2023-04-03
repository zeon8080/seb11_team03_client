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
  justify-content: center;
  gap: 0 20px;
  position: relative;
  width: 100%;
  padding: 20px 25px 0;
  ${mq[0]} {
    padding: 10px;
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
