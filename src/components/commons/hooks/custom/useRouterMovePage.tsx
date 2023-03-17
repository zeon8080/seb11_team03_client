import { useRouter } from "next/router";

interface IUseRouterMovePage {
  onClickMovePage: (path: string) => () => void;
  routerMovePage: (path: string) => void;
}

export const useRouterMovePage = (): IUseRouterMovePage => {
  const router = useRouter();

  const onClickMovePage = (path: string) => () => {
    void router.push(path);
  };

  const routerMovePage = (path: string): void => {
    void router.push(path);
  };
  return { onClickMovePage, routerMovePage };
};
