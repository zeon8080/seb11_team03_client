import { gql, GraphQLClient } from "graphql-request";

const RESTORE_ACCESS_TOKEN = gql`
  mutation {
    restoreAccessToken
  }
`;

export const getNewAccessToken = async () => {
  try {
    const graphQLClient = new GraphQLClient(
      "https://jjjbackendclass.shop/graphql",
      { credentials: "include" }
    );
    console.log("123123");
    const result = await graphQLClient.request(RESTORE_ACCESS_TOKEN);
    console.log(result, "123111123");

    // return newAccessToken;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};
