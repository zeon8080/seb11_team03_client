import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as S from "./joinMiddleStyles";
import { schema } from "./joinMidleValidation";
import { useClickJoin } from "../../../../commons/hooks/custom/useClickJoin";
import JoinEmail from "../../../../commons/joinEmail/joinEmail";
import { useWithAuth } from "../../../../commons/hooks/custom/useWithAuth";
import { wrapAsync } from "../../../../commons/libraries/asyncFunc";

export interface IJoinFormData {
  email: string;
  token: string;
  nickname: string;
  password: string;
  passwordCheck: string;
}

export default function JoinMiddle(): JSX.Element {
  const { onClickJoin } = useClickJoin();
  const { formState, register, handleSubmit } = useForm<IJoinFormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  useWithAuth();

  return (
    <form onSubmit={wrapAsync(handleSubmit(onClickJoin))}>
      <S.Container>
        <S.Wrapper>
          <S.Title>
            <h1>회원가입</h1>
            <span>join us</span>
          </S.Title>

          <S.DivideLine></S.DivideLine>
          <JoinEmail formState={formState} register={register} />

          <S.PasswordBox>
            <span>비밀번호</span>
            <input
              type="password"
              placeholder="비밀번호"
              {...register("password")}
            />
            <p>{formState.errors.password?.message}</p>
            <span>비밀번호 확인</span>
            <input
              type="password"
              placeholder="비밀번호 확인"
              {...register("passwordCheck")}
            />
            <p>{formState.errors.passwordCheck?.message}</p>
          </S.PasswordBox>
          <S.NicknameBox>
            <span>닉네임</span>
            <div>
              <input
                type="text"
                placeholder="닉네임"
                {...register("nickname")}
              />
              <button type="button">중복 확인</button>
            </div>
            <p>{formState.errors.nickname?.message}</p>
          </S.NicknameBox>
          <S.BtnBox>
            <S.JoinBtn
              isActive={
                formState.dirtyFields.email === true &&
                formState.dirtyFields.password === true &&
                formState.dirtyFields.passwordCheck === true &&
                formState.dirtyFields.nickname
              }
              disabled={!formState.isDirty && formState.errors !== undefined}
            >
              회원가입
            </S.JoinBtn>
            <div>
              이미 아이디가 있으신가요?
              <button type="button">로그인</button>
            </div>
          </S.BtnBox>
        </S.Wrapper>
      </S.Container>
    </form>
  );
}
