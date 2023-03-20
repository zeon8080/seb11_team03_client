import styled from "@emotion/styled";

interface IPos {
  xPos: number;
  yPos: number;
}
interface IBgPos {
  bgXpos: number;
  bgYpos: number;
}

export const Container = styled.div<IBgPos>`
  position: relative;
  color: black;
  margin: 0;
  overflow: hidden;
  img {
    position: absolute;
    width: 100%;
    object-fit: none;
    object-position: ${(props) => `${props.bgXpos}% ${props.bgYpos}%`};
    transition: object-position 0.6s cubic-bezier(0.55, 0, 0.1, 1);
    will-change: object-position;
  }
`;

export const Wrapper = styled.div<IPos>`
  height: calc(100vh - 100px);
  width: 100vw;
  transform: translate(
    ${(props) => `${props.xPos}%`},
    ${(props) => `${props.yPos}%`}
  );
  transition: transform 0.5s cubic-bezier(0.55, 0, 0.1, 1);
  will-change: transform;
`;
