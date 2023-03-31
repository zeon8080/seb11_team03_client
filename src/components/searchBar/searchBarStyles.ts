import styled from "@emotion/styled";
const breakpoints = [576, 800, 1200];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);
// ${mq[0]} {
//   font-size: 50px;
// }

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 330px);
  min-width: 254px;
  height: 60px;
  padding: 0 20px;
  background-color: #f5f5f5;
  ${mq[2]} {
    width: calc(100% - 110px);
  }

  & > input {
    width: calc(100% - 42px);
    height: 100%;
    font-weight: 500;
    font-size: 18px;
    background-color: #f5f5f5;
  }

  & > img {
    width: 30px;
    height: 30px;
  }
`;
