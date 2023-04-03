import * as yup from "yup";

export const schema2 = yup.object({
  token: yup.string().required("인증번호 입력은 필수입니다."),
});
