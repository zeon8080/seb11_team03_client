import { gql, useMutation } from "@apollo/client";

const CREATE_RESERVATION = gql`
  mutation ($createReservationinput: CreateReservationInput!) {
    createReservation(createReservationinput: $createReservationinput) {
      id
    }
  }
`;

export const useMutationCreateReservation = (): any => {
  const createReservation = useMutation(CREATE_RESERVATION);

  return createReservation;
};
