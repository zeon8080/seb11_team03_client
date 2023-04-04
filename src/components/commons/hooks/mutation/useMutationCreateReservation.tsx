import { gql, useMutation } from "@apollo/client";

const CREATE_RESERVATION = gql`
  mutation ($createReservationInput: CreateReservationInput!) {
    createReservation(createReservationInput: $createReservationInput) {
      id
    }
  }
`;

export const useMutationCreateReservation = (): any => {
  const createReservation = useMutation(CREATE_RESERVATION);

  return createReservation;
};
