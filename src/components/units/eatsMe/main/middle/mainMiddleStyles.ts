import styled from "@emotion/styled";

export const Container = styled.div`
  position: relative;
  color: black;
  margin: 0;
  overflow: hidden;
`;

export const Wrapper = styled.div`
  height: calc(100vh - 80px);
  width: 100vw;
  transition: transform 0.5s cubic-bezier(0.55, 0, 0.1, 1);
  will-change: transform;
`;
