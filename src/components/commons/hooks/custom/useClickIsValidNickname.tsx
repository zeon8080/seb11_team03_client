// import { useQuery } from "@apollo/client";
// import { MouseEventHandler } from "react";
// import {
//   IQuery,
//   IQueryIsValidNicknameArgs,
// } from "../../../../commons/types/generated/types";
// import { ISVALID_NICKNAME } from "../query/useQueryIsValidNickname";

// interface IUseClickIsValidNickname {
//   // onClickNickname: MouseEventHandler<HTMLButtonElement>;
//   onClickNickname: (nickname: string) => void;
// }

// export const useClickIsValidNickname = (): IUseClickIsValidNickname => {
//   const onClickNickname = (nickname: string): void => {
//     try {
//       const { data } = useQuery<
//         Pick<IQuery, "isValidNickname">,
//         IQueryIsValidNicknameArgs
//       >(ISVALID_NICKNAME, {
//         variables: {
//           nickname,
//         },
//       });
//       console.log(data);
//     } catch (error) {
//       if (error instanceof Error) alert(error.message);
//     }
//   };

//   return { onClickNickname };
// };
