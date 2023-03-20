import { useState } from "react";
import { panelMove } from "../libraries/panelMove";
import { Modal } from "antd";
import * as S from "./mainPanelStyles";

interface IMainPanel {
  panelXpos: number;
  panelYpos: number;
  areaNames: string[];
  xPos: number;
  bgXpos: number;
  yPos: number;
  bgYpos: number;
  setBgYpos: (value: number) => void;
  setBgXpos: (value: number) => void;
  setYpos: (value: number) => void;
  setXpos: (value: number) => void;
}

export default function MainPanel(props: IMainPanel): JSX.Element {
  const { onMoveUp, onMoveDown, onMoveLeft, onMoveRight } = panelMove(props);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = (): void => {
    setIsModalOpen(true);
  };

  const handleOk = (): void => {
    setIsModalOpen(false);
  };

  const handleCancel = (): void => {
    setIsModalOpen(false);
  };

  return (
    <S.Container panelXpos={props.panelXpos} panelYpos={props.panelYpos}>
      <S.AreaModal>
        <S.ModalBtn onClick={showModal}></S.ModalBtn>
        <Modal
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          width={"fit-content"}
          footer={null}
          closable={false}
          centered
        >
          <S.ModalBtnWrap>
            <button>코스 추천</button>
            <button>지역 맛집</button>
          </S.ModalBtnWrap>
        </Modal>
      </S.AreaModal>
      <S.AreaName
        className="up left"
        onClick={() => {
          onMoveLeft();
          onMoveUp();
        }}
      >
        {props.areaNames[0]}
      </S.AreaName>
      <S.AreaName className="up x_center" onClick={onMoveUp}>
        {props.areaNames[1]}
      </S.AreaName>
      <S.AreaName
        className="right up"
        onClick={() => {
          onMoveRight();
          onMoveUp();
        }}
      >
        {props.areaNames[2]}
      </S.AreaName>
      <S.AreaName className="left y_center" onClick={onMoveLeft}>
        {props.areaNames[3]}
      </S.AreaName>
      <S.AreaName className="right y_center" onClick={onMoveRight}>
        {props.areaNames[4]}
      </S.AreaName>
      <S.AreaName
        className="left down"
        onClick={() => {
          onMoveDown();
          onMoveLeft();
        }}
      >
        {props.areaNames[5]}
      </S.AreaName>
      <S.AreaName className="down x_center" onClick={onMoveDown}>
        {props.areaNames[6]}
      </S.AreaName>
      <S.AreaName
        className="right down"
        onClick={() => {
          onMoveDown();
          onMoveRight();
        }}
      >
        {props.areaNames[7]}
      </S.AreaName>
    </S.Container>
  );
}
