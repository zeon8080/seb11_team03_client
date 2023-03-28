import styled from "@emotion/styled";
const breakpoints = [576, 800, 1200];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);
// ${mq[0]} {
//   font-size: 50px;
// }
export const Container = styled.div`
  position: relative;
  color: black;
  margin: 0;
  overflow: hidden;
  ${mq[1]} {
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  height: calc(100vh - 80px);
  width: 100vw;
  transition: transform 0.5s cubic-bezier(0.55, 0, 0.1, 1);
  will-change: transform;
  ${mq[1]} {
    height: calc(100vh - 60px);
  }
`;
