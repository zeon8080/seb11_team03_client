import { IJoinFormData } from "../../../units/eatsMe/join/middle/joinMiddle";
import { useMutationMatchAuthNumber } from "../mutation/useMutationMatchAuthNumber";

export const useClickMatchAuth = () => {
  const [matchAuth] = useMutationMatchAuthNumber();

  const onClickMatchAuth = async (data: IJoinFormData): Promise<void> => {
    console.log("중복확인", data);
    try {
      await matchAuth({
        variables: {
          matchtAuthNumberInput: {
            email: data.email,
            authNumber: data.token,
          },
        },
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  return { onClickMatchAuth };
};
