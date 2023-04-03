import * as yup from "yup";

export const schema1 = yup.object({
  nickname: yup
    .string()
    .max(8, "8글자 이내로 적어주세요")
    .required("별칭을 입력해주세요."),

  password: yup
    .string()
    .min(8, "영문+숫자 조합 8~16자리의 비밀번호를 입력해주세요.")
    .max(16, "16자리 이내로 입력해주세요.")
    .matches(
      /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,16}[^\s]*$/,
      "영문+숫자 조합 8~16자리의 비밀번호를 입력해주세요."
    )
    .required("비밀번호를 입력해주세요."),

  passwordCheck: yup
    .string()
    .oneOf([yup.ref("password")], "비밀번호가 일치하지 않습니다.")
    .required("비밀번호를 입력해주세요."),
});
