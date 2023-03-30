import { UseMutationLogout } from "../mutation/useMutationLogout";
import { useRouterMovePage } from "./useRouterMovePage";

export const useClickLogout = (): any => {
  const [logoutUser] = UseMutationLogout();
  const { routerMovePage } = useRouterMovePage();

  const onClickLogout = async (): Promise<void> => {
    await logoutUser();
    routerMovePage("/");
  };
  return { onClickLogout };
};
