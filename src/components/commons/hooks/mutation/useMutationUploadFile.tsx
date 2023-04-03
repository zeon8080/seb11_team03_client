import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../../commons/types/generated/types";

const UPLOAD_FILE = gql`
  mutation ($file: Upload!) {
    uploadFile(file: $file)
  }
`;

export const useMutationUploadFile = (): typeof uploadFile => {
  const uploadFile = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  return uploadFile;
};
