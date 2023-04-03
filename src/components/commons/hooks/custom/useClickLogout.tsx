import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/stores";
import { useMutationLogout } from "../mutation/useMutationLogout";
import { useRouterMovePage } from "./useRouterMovePage";

export const useClickLogout = (): any => {
  const [logoutUser] = useMutationLogout();
  const { routerMovePage } = useRouterMovePage();
  const [, setAccessToken] = useRecoilState(accessTokenState);

  const onClickLogout = async (): Promise<void> => {
    await logoutUser();
    routerMovePage("/");
    setAccessToken("");
  };
  return { onClickLogout };
};
