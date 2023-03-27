import { UseMutationLogout } from "../mutation/useMutationlogout";
import { useRouterMovePage } from "./useRouterMovePage";

export const useClickLogout = () => {
  const [logoutUser] = UseMutationLogout();
  const { routerMovePage } = useRouterMovePage();

  const onClickLogout = async () => {
    await logoutUser();
    routerMovePage("/");
  };
  return { onClickLogout };
};
