interface IPanelMove {
  xPos: number;
  bgXpos: number;
  yPos: number;
  bgYpos: number;
  setBgYpos: (value: number) => void;
  setBgXpos: (value: number) => void;
  setYpos: (value: number) => void;
  setXpos: (value: number) => void;
}
interface IPanelReturn {
  onMoveUp: () => void;
  onMoveDown: () => void;
  onMoveLeft: () => void;
  onMoveRight: () => void;
}

export const panelMove = (pos: IPanelMove): IPanelReturn => {
  const onMoveUp = (): void => {
    pos.setBgYpos(pos.bgYpos - 24.5);
    pos.setYpos(Number(pos.yPos) + 100);
  };

  const onMoveDown = (): void => {
    pos.setBgYpos(Number(pos.bgYpos) + 24.5);
    pos.setYpos(pos.yPos - 100);
  };

  const onMoveLeft = (): void => {
    pos.setBgXpos(pos.bgXpos - 24.5);
    pos.setXpos(Number(pos.xPos) + 100);
  };

  const onMoveRight = (): void => {
    pos.setBgXpos(Number(pos.bgXpos) + 24.5);
    pos.setXpos(pos.xPos - 100);
  };

  return {
    onMoveUp,
    onMoveDown,
    onMoveLeft,
    onMoveRight,
  };
};
