import { useMutationCheckEmail } from "../mutation/useMutationCheckEmail";

export const useClickCheckEmail = () => {
  const [checkEmail] = useMutationCheckEmail();

  const onClickCheckEmail = async (data): Promise<void> => {
    console.log(data, "214242");

    try {
      await checkEmail({
        variables: {
          email: data.email,
        },
      });
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };
  return { onClickCheckEmail };
};
