import { gql, GraphQLClient } from "graphql-request";
const RESTORE_ACCESS_TOKEN = gql`
  mutation {
    restoreAccessToken
  }
`;

export const getNewAccessToken = async (): Promise<string | undefined> => {
  try {
    const graphQLClient = new GraphQLClient("http://34.64.75.126/graphql", {
      credentials: "include",
    });
    const result = await graphQLClient.request(RESTORE_ACCESS_TOKEN);
    const newAccessToken = result.restoreAccessToken;
    return newAccessToken;
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
  }
};
