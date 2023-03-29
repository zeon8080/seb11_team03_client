import styled from "@emotion/styled";
const breakpoints = [576, 800, 1200];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);
// ${mq[0]} {
//   font-size: 50px;
// }

interface IModal {
  isOpen: boolean;
}
export const Container = styled.div`
  position: absolute;
  display: flex;
  width: 100vw;
  height: 100%;
  transition: transform 0.3s cubic-bezier(0.55, 0, 0.1, 1);
  left: 0;
  top: 0;
  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: 0.3s;
    .common {
      cursor: pointer;
      transition: 0.3s;
      :hover {
        fill: rgba(251, 178, 64);
        transform: translate(5%, 5%);
      }
    }
  }
`;

export const ModalWrap = styled.div<IModal>`
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  transition: ${(props) => (props.isOpen ? "0.5s" : "0.5s 0.5s")};
  width: ${(props) => (props.isOpen ? "100%" : 0)};
  height: ${(props) => (props.isOpen ? "100%" : 0)};
  font-size: 30px;
  background-color: rgba(0, 0, 0, 0.5);
`;
export const Modal = styled.div<IModal>`
  position: absolute;
  bottom: 0;
  left: 50%;
  display: flex;
  justify-content: space-between;
  transform: translateX(-50%);
  transition: width 0.6s, height 0.6s;
  background-color: #eee;
  button {
    position: absolute;
    cursor: pointer;
    border-bottom: 3px solid #fbb240;
    background-color: transparent;
    transition: ${(props) =>
      props.isOpen ? "bottom 0.5s 0.5s" : "bottom 0.5s"};
    width: ${(props) => (props.isOpen ? "max-content" : 0)};
    height: ${(props) => (props.isOpen ? "40px" : 0)};
    font-size: ${(props) => (props.isOpen ? "20px" : 0)};
    line-height: 30px;
    color: white;
    width: 300px;
    height: fit-content;
    padding: 0 10px;
    ${mq[2]} {
      width: 200px;
    }
    ${mq[1]} {
      width: 140px;
    }
    :hover {
      border-color: black;
    }
    img {
      width: 100%;
      height: 100%;
    }
    span {
      position: absolute;
      left: 50%;
      top: 82px;
      transform: translateX(-50%);
      font-size: 30px;
      font-weight: 600;
      white-space: nowrap;
      ${mq[2]} {
        top: 52px;
        font-size: 20px;
      }
      ${mq[1]} {
        top: 32px;
        font-size: 14px;
      }
    }
  }
  .store {
    left: 20vw;
    bottom: ${(props) => (props.isOpen ? "20px" : "-110vh")};
    img {
      transform: translateY(8px);
    }
  }
  .register {
    right: 20vw;
    bottom: ${(props) => (props.isOpen ? "20px" : "-110vh")};
    img {
      transform: rotateY(180deg) translateY(8px);
    }
  }
`;
