import { Dispatch } from "react";
import { ICreateBoardInput } from "../../../../commons/types/generated/types";
import { useMutationUploadFile } from "../mutation/useMutationUploadFile";

interface IArgs {
  file: File;
  setPath: Dispatch<any>;
  nowPage: number;
}

interface IUseChangeUploadFile {
  onChangeUploadFile: (args: IArgs) => Promise<void>;
}

export const useChangeUploadFile = (): IUseChangeUploadFile => {
  const [uploadFile] = useMutationUploadFile();

  const onChangeUploadFile = async (args: IArgs): Promise<void> => {
    const result = await uploadFile({ variables: { file: args.file } });
    args.setPath((prev: ICreateBoardInput) => ({
      ...prev,
      info: prev.info.map((el, idx) => {
        if (args.nowPage === idx)
          return {
            ...el,
            imgUrl: result.data?.uploadFile,
          };
        return { ...el };
      }),
    }));
  };
  return { onChangeUploadFile };
};
