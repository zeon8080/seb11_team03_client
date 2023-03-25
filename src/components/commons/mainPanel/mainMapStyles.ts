import styled from "@emotion/styled";

interface IModal {
  isOpen: boolean;
}
export const Container = styled.div`
  position: absolute;
  display: flex;
  width: 100vw;
  height: calc(100vh - 100px);
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
  top: 50%;
  transform: translate(-50%, -50%);
  transition: 0.5s;
  width: ${(props) => (props.isOpen ? "100%" : 0)};
  height: ${(props) => (props.isOpen ? "100%" : 0)};
  font-size: 30px;
  background-color: rgba(0, 0, 0, 0.5);
`;
export const Modal = styled.div<IModal>`
  // display: ${(props) => (props.isOpen ? "block" : "none")};
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  justify-content: space-between;
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
  /* width: ${(props) => (props.isOpen ? "350px" : 0)};
  height: ${(props) => (props.isOpen ? "120px" : 0)}; */
  background-color: #eee;
  button {
    position: absolute;

    cursor: pointer;
    border-bottom: 3px solid #fbb240;
    background-color: transparent;
    transition: bottom 0.6s;
    width: ${(props) => (props.isOpen ? "max-content" : 0)};
    height: ${(props) => (props.isOpen ? "40px" : 0)};
    font-size: ${(props) => (props.isOpen ? "20px" : 0)};
    line-height: 30px;
    color: white;
    font-weight: 600;
    padding: ${(props) => (props.isOpen ? "0 10px" : 0)};
    :hover {
      color: #fbb240;
      border-color: black;
    }
  }
  .store {
    left: 300px;
    bottom: ${(props) => (props.isOpen ? "100px" : "-50vh")};
  }
  .register {
    right: 300px;
    bottom: ${(props) => (props.isOpen ? "100px" : "-50vh")};
  }
`;
