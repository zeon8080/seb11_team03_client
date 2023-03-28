import styled from "@emotion/styled";
const breakpoints = [576, 768, 992, 1200];
const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);
// ${mq[0]} {
//   font-size: 50px;
// }
export const Container = styled.div`
  position: relative;
  color: black;
  margin: 0;
  overflow: hidden;
  ${mq[3]} {
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  height: calc(100vh - 100px);
  width: 100%;
  transition: transform 0.5s cubic-bezier(0.55, 0, 0.1, 1);
  will-change: transform;
`;
