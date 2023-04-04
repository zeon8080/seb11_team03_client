import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/stores";
import { UseMutationLogin } from "../mutation/useMutationLogin";
import { useRouterMovePage } from "./useRouterMovePage";

export interface ILoginFormData {
  email: string;
  password: string;
}

export const useClickLogin = (): any => {
  const [loginUser] = UseMutationLogin();
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const { routerMovePage } = useRouterMovePage();

  const onClickLogin = async (data: ILoginFormData): Promise<void> => {
    try {
      if (data.email !== "" && data.password !== "") {
        const result = await loginUser({
          variables: {
            loginAuthInput: {
              email: data.email,
              password: data.password,
            },
          },
        });
        if (result.data?.login === undefined) {
          alert("로그인에 실패했습니다.");
          return;
        }
        setAccessToken(result.data?.login);
        routerMovePage("/");
      }
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  return { onClickLogin };
};
