import { ApolloQueryResult, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsByEveryArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_BOARD_BY_EVERY } from "../query/useQueryFetchBoardsByEvery";

interface IUseClickRouteList {
  data: Pick<IQuery, "fetchBoardsByEvery"> | undefined;
  refetch: (
    variables?: Partial<IQueryFetchBoardsByEveryArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoardsByEvery">>>;
}

export const useClickRouteList = (
  variables: IQueryFetchBoardsByEveryArgs
): IUseClickRouteList => {
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoardsByEvery">,
    IQueryFetchBoardsByEveryArgs
  >(FETCH_BOARD_BY_EVERY, { variables });

  return { data, refetch };
};
