import { Dispatch, MouseEvent, SetStateAction, useState } from "react";

export const useSetIsActive = (): [
  string,
  (event: MouseEvent) => void,
  Dispatch<SetStateAction<string>>
] => {
  const [isActive, setIsActive] = useState("");

  const onClickIsActive = (event: MouseEvent): void => {
    setIsActive(event.currentTarget.id);
  };
  return [isActive, onClickIsActive, setIsActive];
};
