import { IJoinFormData } from "../../../units/eatsMe/join/middle/joinMiddle";
import { useMutationMatchAuthNumber } from "../mutation/useMutationMatchAuthNumber";

export const useClickMatchAuth = (setTime: any): any => {
  const [matchAuth] = useMutationMatchAuthNumber();

  const onClickMatchAuth = async (data: IJoinFormData): Promise<void> => {
    try {
      await matchAuth({
        variables: {
          matchAuthNumberInput: {
            email: data.email,
            authNumber: data.token,
          },
        },
      });
      alert("인증에 성공하셨습니다");
      setTime(0);
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };
  return { onClickMatchAuth };
};
