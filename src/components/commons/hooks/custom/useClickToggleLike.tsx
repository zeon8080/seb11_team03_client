import { useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationToggleLikeArgs,
} from "../../../../commons/types/generated/types";
import { TOGGLE_LIKE } from "../mutation/useMutationToggleLike";

interface IUseClickToggleLike {
  onClickToggleLike: (boardId: string) => void;
}

export const useClickToggleLike = (): IUseClickToggleLike => {
  const [toggleLike] = useMutation<
    Pick<IMutation, "toggleLike">,
    IMutationToggleLikeArgs
  >(TOGGLE_LIKE);
  const onClickToggleLike = (boardId: string): void => {
    try {
      void toggleLike({ variables: { boardId } });
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };
  return { onClickToggleLike };
};
