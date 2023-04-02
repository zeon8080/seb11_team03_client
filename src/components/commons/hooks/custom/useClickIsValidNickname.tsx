import { useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryIsValidNicknameArgs,
} from "../../../../commons/types/generated/types";
import { ISVALID_NICKNAME } from "../query/useQueryIsValidNickname";

interface IUseClickIsValidNickname {
  onClickNickname: (nickname: string) => void;
}

export const useClickIsValidNickname = (): IUseClickIsValidNickname => {
  const onClickNickname = (nickname: string): void => {
    try {
      const { data } = useQuery<
        Pick<IQuery, "isValidNickname">,
        IQueryIsValidNicknameArgs
      >(ISVALID_NICKNAME, {
        variables: {
          nickname,
        },
      });

      // 사용중인 닉네임이 없을때 실행할 로직
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return { onClickNickname };
};
