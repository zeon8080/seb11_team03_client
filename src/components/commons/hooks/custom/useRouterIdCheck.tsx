import { useRouter } from "next/router";

interface IUseRouterIdCheck {
  id: string;
}

export const useRouterIdCheck = (id: string): IUseRouterIdCheck => {
  const router = useRouter();
  const queryId = router.query[id];

  if (queryId === undefined) return { id: "undefined" };
  if (typeof queryId === "object") return { id: queryId[0] };

  return { id: queryId };
};
