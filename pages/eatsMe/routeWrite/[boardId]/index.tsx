import { useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../src/commons/types/generated/types";
import { useRouterIdCheck } from "../../../../src/components/commons/hooks/custom/useRouterIdCheck";
import { useWithAuth } from "../../../../src/components/commons/hooks/custom/useWithAuth";
import { FETCH_BOARD } from "../../../../src/components/commons/hooks/query/useQueryFetchBoard";
import RouteWrite from "../../../../src/components/units/eatsMe/routeWrite/routeWrite";

export default function RouteUpdatePage(): JSX.Element {
  useWithAuth();
  const { id } = useRouterIdCheck("boardId");
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    { variables: { boardId: id } }
  );
  return (
    <>
      <RouteWrite isEdit={true} data={data} />
    </>
  );
}
