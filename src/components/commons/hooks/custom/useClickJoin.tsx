import { IJoinFormData } from "../../../units/eatsMe/join/middle/joinMiddle";
import { useMutationCreateUser } from "../mutation/useMutationCreateUser";
import { useRouterMovePage } from "./useRouterMovePage";

export const useClickJoin = () => {
  const [createUser] = useMutationCreateUser();
  const { routerMovePage } = useRouterMovePage();

  const onClickJoin = async (data: IJoinFormData): Promise<void> => {
    try {
      if (data.email && data.nickname && data.password === data.passwordCheck) {
        const result = await createUser({
          variables: {
            createUserInput: {
              email: data.email,
              password: data.password,
              nickname: data.nickname,
            },
          },
        });
        console.log("123", result);
        routerMovePage("/eatsMe/popularList");
      }
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  return { onClickJoin };
};
