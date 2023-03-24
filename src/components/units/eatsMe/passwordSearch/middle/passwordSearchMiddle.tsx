import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as S from "./passwordSearchMiddleStyles";
import { schema } from "./passwordSearchMiddleValidation";

export default function PasswordSearchMiddle(): JSX.Element {
  const { register, formState, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickSearch = (): void => {};

  return (
    <form onSubmit={handleSubmit(onClickSearch)}>
      <S.Container>
        <S.Wrapper>
          <S.Title>비밀번호 찾기</S.Title>
          <S.DivideLine></S.DivideLine>

          <S.EmailBox>
            <span>이메일</span>
            <input type="text" {...register("email")} placeholder="E-mail" />
            <p>{formState.errors.email?.message}</p>
          </S.EmailBox>
          <S.SearchBtn>확인</S.SearchBtn>
        </S.Wrapper>
      </S.Container>
    </form>
  );
}
