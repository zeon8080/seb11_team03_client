import { FieldValues, UseFormSetValue } from "react-hook-form";
import { useMutationCheckEmail } from "../mutation/useMutationCheckEmail";

interface IArgs {
  email: string;
  setValue: UseFormSetValue<FieldValues>;
}

export const useClickCheckEmail = () => {
  const [checkEmail] = useMutationCheckEmail();

  const onClickCheckEmail = async (args: IArgs): Promise<void> => {
    console.log(args.email);

    await checkEmail({
      variables: {
        email: args.email,
      },
    });
    args.setValue("email", args.email);
  };
  return { onClickCheckEmail };
};
