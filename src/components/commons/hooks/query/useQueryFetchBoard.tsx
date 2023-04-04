import { gql } from "@apollo/client";

export const FETCH_BOARD = gql`
  query ($boardId: String!) {
    fetchBoard(boardId: $boardId) {
      id
      title
      startArea
      endArea
      startPoint
      endPoint
      createdAt
      personalMapData {
        area
        section
        restaurantName
        imgUrl
        recommend
        location {
          lat
          lng
        }
      }
    }
  }
`;
