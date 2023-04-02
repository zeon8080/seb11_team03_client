import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as S from "./joinMiddleStyles";
import { schema } from "./joinMidleValidation";
import { useClickJoin } from "../../../../commons/hooks/custom/useClickJoin";
import JoinEmail from "../../../../commons/joinEmail/joinEmail";
import { wrapAsync } from "../../../../commons/libraries/asyncFunc";
import { useState } from "react";
import { useClickIsValidNickname } from "../../../../commons/hooks/custom/useClickIsValidNickname";

export interface IJoinFormData {
  email: string;
  token: string;
  nickname: string;
  password: string;
  passwordCheck: string;
}

export default function JoinMiddle(): JSX.Element {
  const [email, setEmail] = useState("");
  const { onClickNickname } = useClickIsValidNickname();
  const { onClickJoin } = useClickJoin();
  const { formState, register, handleSubmit, setValue } =
    useForm<IJoinFormData>({
      resolver: yupResolver(schema),
      mode: "onChange",
    });

  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>
          <h1>회원가입</h1>
          <span>join us</span>
        </S.Title>

        <S.DivideLine></S.DivideLine>
        <JoinEmail setEmail={setEmail} email={email} setValue={setValue} />
        <form onSubmit={wrapAsync(handleSubmit(onClickJoin))}>
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
              <button type="button" onClick={onClickNickname}>
                중복 확인
              </button>
            </div>
            <p>{formState.errors.nickname?.message}</p>
          </S.NicknameBox>
          <S.BtnBox>
            <S.JoinBtn
              isActive={
                // formState.dirtyFields.email === true &&
                formState.dirtyFields.password === true &&
                formState.dirtyFields.passwordCheck === true &&
                formState.dirtyFields.nickname === true
              }
              // disabled={!formState.isDirty && formState.errors !== undefined}
            >
              회원가입
            </S.JoinBtn>
            <div>
              이미 아이디가 있으신가요?
              <button type="button">로그인</button>
            </div>
          </S.BtnBox>
        </form>
      </S.Wrapper>
    </S.Container>
  );
}
