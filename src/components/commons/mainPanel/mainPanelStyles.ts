import styled from "@emotion/styled";

interface IPanelPos {
  panelXpos: number;
  panelYpos: number;
}

export const Container = styled.div<IPanelPos>`
  position: absolute;
  width: 100vw;
  height: calc(100vh - 100px);
  transition: transform 0.3s cubic-bezier(0.55, 0, 0.1, 1);
  left: ${(props) => `${props.panelXpos}00%`};
  top: ${(props) => `${props.panelYpos}00%`};
  .up {
    top: 20px;
  }
  .down {
    bottom: 20px;
  }
  .right {
    right: 20px;
  }
  .left {
    left: 20px;
  }
  .x_center {
    left: 50%;
    transform: translateX(-50%);
  }
  .y_center {
    top: 50%;
    transform: translateY(-50%);
  }
  .right.y_center {
    transform: translateY(50%) rotateZ(90deg);
    transform-origin: top right;
  }
  .left.y_center {
    transform: translateY(50%) rotateZ(-90deg);
    transform-origin: top left;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const AreaModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: transparent;
  .shake:hover {
    animation: shake 0.5s ease-in-out infinite;
  }
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(-5px);
    }
    50% {
      transform: translateX(5px);
    }
    75% {
      transform: translateX(-5px);
    }
    100% {
      transform: translateX(0);
    }
  }
`;

export const ModalBtn = styled.button`
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  color: white;
  font-size: 150px;
  font-weight: 800;
  cursor: pointer;
`;
export const ModalBtnWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 360px;
  button {
    cursor: pointer;
    width: 40%;
    line-height: 40px;
    border: 2px solid #fbb240;
    font-size: 30px;
    background-color: white;
    color: #fbb240;
    font-weight: 500;
    padding: 13px 0 10px;
    border-radius: 4px;
    :hover {
      background-color: #fbb240;
      color: white;
    }
  }
`;
export const AreaName = styled.div`
  position: absolute;
  cursor: pointer;
  font-size: 60px;
  font-weight: 700;
  color: white;
  opacity: 0.5;
  :hover {
    opacity: 1;
  }
`;
