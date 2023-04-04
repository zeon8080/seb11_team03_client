import { useMutationCheckEmail } from "../mutation/useMutationCheckEmail";

export const useClickCheckEmail = (): any => {
  const [checkEmail] = useMutationCheckEmail();

  const onClickCheckEmail = async (data: any): Promise<void> => {
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
