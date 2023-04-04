import { useMutationCheckEmail } from "../mutation/useMutationCheckEmail";

export const useClickCheckEmail = (): any => {
  const [checkEmail] = useMutationCheckEmail();

  const onClickCheckEmail = async (data: any): Promise<void> => {
    console.log(data, "214242");

    try {
      await checkEmail({
        variables: {
          email: data.email,
        },
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  return { onClickCheckEmail };
};
