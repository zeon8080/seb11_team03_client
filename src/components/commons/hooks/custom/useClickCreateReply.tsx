import { Dispatch, SetStateAction } from "react";
import { ICreateReplyInput } from "../../../../commons/types/generated/types";
import { useMutationCreateReply } from "../mutation/useMutationCreateReply";
import { FETCH_BOARD_BY_EVERY } from "../query/useQueryFetchBoardsByEvery";

interface IUseClickCreateReply {
  onClickCreateReply: (
    setIsReply: Dispatch<SetStateAction<string>>
  ) => (createReplyInput: ICreateReplyInput) => Promise<void>;
}

export const useClickCreateReply = (): IUseClickCreateReply => {
  const [createReply] = useMutationCreateReply();

  const onClickCreateReply =
    (setIsReply: Dispatch<SetStateAction<string>>) =>
    async (createReplyInput: ICreateReplyInput): Promise<void> => {
      console.log(setIsReply, createReplyInput, "dajkopadjiadjiodajioda");
      try {
        await createReply({
          variables: { createReplyInput },
          // refetchQueries: [
          //   {
          //     query: FETCH_BOARD_BY_EVERY,
          //   },
          // ],
        });
        setIsReply("");
      } catch (error) {
        if (error instanceof Error) console.log(error.message);
      }
    };

  return { onClickCreateReply };
};
