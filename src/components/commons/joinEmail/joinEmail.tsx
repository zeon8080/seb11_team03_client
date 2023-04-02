import { yupResolver } from "@hookform/resolvers/yup";
import { ChangeEvent } from "react";
import {
  FieldError,
  FormState,
  useForm,
  UseFormRegister,
} from "react-hook-form";
import { IJoinFormData } from "../../units/eatsMe/join/middle/joinMiddle";
import { useClickCheckEmail } from "../hooks/custom/useClickCheckEmail";
import { useClickMatchAuth } from "../hooks/custom/useClickMatchAuth";
import { useTimer } from "../hooks/custom/useTimer";
import * as S from "./joinEmailStyles";
import { schema } from "./joinEmailValidation";

interface IJoinEmail {
  formState: FormState<IJoinFormData>;
  dirtyFields?: Record<string, boolean>;
  isDirty?: boolean;
  errors?: Record<string, FieldError | undefined>;
  register: UseFormRegister<IJoinFormData>;
}

export default function JoinEmail(props): JSX.Element {
  const { formState, register, handleSubmit } = useForm({
    // resolver: yupResolver(schema),
    // mode: "onChange",
  });

  const { onClickCheckEmail } = useClickCheckEmail();
  const { onClickMatchAuth } = useClickMatchAuth();
  const { time, setTime, setIsStarted } = useTimer();
  const min = Math.floor(time / 60);
  const sec = String(time % 60).padStart(2, "0");

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>): void => {
    props.setEmail(event.target.value);
  };

  const onClickAuth = (): void => {
    setIsStarted(true);
    void onClickCheckEmail({ email: props.email, setValue: props.setValue });
  };

  const onClickReAuth = (): void => {
    setTime(30);
    setIsStarted(false);
    onClickAuth();
  };

  return (
    <form onSubmit={handleSubmit(onClickMatchAuth)}>
      <S.EmailBox>
        <span>이메일</span>
        <input type="text" placeholder="이메일" onChange={onChangeEmail} />
        <p></p>
        <S.EmailTokenBtn
          type="button"
          onClick={onClickAuth}
          isActive={time > 0 && props.email.includes("@")}
          disabled={!props.email.includes("@")}
        >
          인증번호 보내기
        </S.EmailTokenBtn>
        <S.AccreditBox>
          <span>이메일로 전송된 인증번호를 입력해주세요.</span>
          <S.TokenBox>
            <input
              type="text"
              placeholder="인증번호 6자리 입력"
              {...register("token")}
            />

            <span id="timer">
              {min}:{sec}
            </span>

            <S.TokenBtn
              isActive={time > 0 && time !== 30}
              // disabled={
              //   !formState.isDirty ||
              //   formState.errors.token !== undefined ||
              //   time > 0
              // }
            >
              확인
            </S.TokenBtn>
          </S.TokenBox>

          <button
            type="button"
            onClick={onClickReAuth}
            disabled={
              !formState.isDirty || formState.errors.email !== undefined
            }
          >
            인증번호 재전송하기
          </button>
          <p>{formState.errors.token?.message}</p>
        </S.AccreditBox>
      </S.EmailBox>
    </form>
  );
}
