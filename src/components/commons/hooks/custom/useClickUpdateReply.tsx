import { Dispatch, SetStateAction } from "react";
import { IUpdateReplyInput } from "../../../../commons/types/generated/types";
import { useMutationUpdateReply } from "../mutation/useMutationUpdateReply";
import { FETCH_BOARD_BY_EVERY } from "../query/useQueryFetchBoardsByEvery";

interface IUseClickUpdateReply {
  onClickUpdateReply: (
    setIsReplyModify: Dispatch<SetStateAction<boolean>>
  ) => (updateReplyInput: IUpdateReplyInput) => Promise<void>;
}

export const useClickUpdateReply = (): IUseClickUpdateReply => {
  const [updateReply] = useMutationUpdateReply();

  const onClickUpdateReply =
    (setIsReplyModify: Dispatch<SetStateAction<boolean>>) =>
    async (updateReplyInput: IUpdateReplyInput): Promise<void> => {
      try {
        await updateReply({
          variables: { updateReplyInput },
          refetchQueries: [
            {
              query: FETCH_BOARD_BY_EVERY,
            },
          ],
        });
        setIsReplyModify(false);
      } catch (error) {
        if (error instanceof Error) console.log(error.message);
      }
    };

  return { onClickUpdateReply };
};
