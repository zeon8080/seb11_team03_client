import { MouseEvent } from "react";
import { useMutationDeleteReply } from "../mutation/useMutationDeleteReply";
import { FETCH_BOARD_BY_EVERY } from "../query/useQueryFetchBoardsByEvery";

interface IUseClickDeleteReply {
  onClickDeleteReply: (event: MouseEvent<HTMLImageElement>) => Promise<void>;
}

export const useClickDeleteReply = (): IUseClickDeleteReply => {
  const [deleteReply] = useMutationDeleteReply();

  const onClickDeleteReply = async (
    event: MouseEvent<HTMLImageElement>
  ): Promise<void> => {
    try {
      await deleteReply({
        variables: { replyId: event.currentTarget.id },
        refetchQueries: [
          {
            query: FETCH_BOARD_BY_EVERY,
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  return { onClickDeleteReply };
};
