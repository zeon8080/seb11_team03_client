import { IJoinFormData } from "../../../units/eatsMe/join/middle/joinMiddle";
import { useMutationCreateUser } from "../mutation/useMutationCreateUser";
import { useRouterMovePage } from "./useRouterMovePage";

export const useClickJoin = () => {
  const [createUser] = useMutationCreateUser();
  const { routerMovePage } = useRouterMovePage();

  const onClickJoin = async (data: IJoinFormData): Promise<void> => {
    console.log(data);

    try {
      const result = await createUser({
        variables: {
          createUserInput: {
            email: data.email,
            password: data.password,
            nickname: data.nickname,
          },
        },
      });
      console.log(result);
      routerMovePage("/eatsMe/login");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  return { onClickJoin };
};
