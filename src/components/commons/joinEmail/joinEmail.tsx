import { FieldError, FormState, UseFormRegister } from "react-hook-form";
import { IJoinFormData } from "../../units/eatsMe/join/middle/joinMiddle";
import { useTimer } from "../hooks/custom/useTimer";
import * as S from "./joinEmailStyles";

interface IJoinEmail {
  formState: FormState<IJoinFormData>;
  dirtyFields?: Record<string, boolean>;
  isDirty?: boolean;
  errors?: Record<string, FieldError | undefined>;
  register: UseFormRegister<IJoinFormData>;
}

export default function JoinEmail(props: IJoinEmail): JSX.Element {
  const { time, setTime, setIsStarted } = useTimer();
  const min = Math.floor(time / 60);
  const sec = String(time % 60).padStart(2, "0");

  const onClickAuth = (): void => {
    setIsStarted(true);
  };

  const onClickReAuth = (): void => {
    setTime(5);
    setIsStarted(false);
    onClickAuth();
  };

  return (
    <>
      <S.EmailBox>
        <span>이메일</span>
        <input type="text" placeholder="이메일" {...props.register("email")} />
        <p>{props.formState.errors.email?.message}</p>
        <S.EmailTokenBtn
          type="button"
          onClick={onClickAuth}
          isActive={
            time > 0 &&
            props.formState.errors.email === undefined &&
            // props.formState.dirtyFields.email
            props.formState.isDirty
          }
          disabled={
            !props.formState.isDirty ||
            props.formState.errors.email !== undefined
          }
        >
          인증번호 보내기
        </S.EmailTokenBtn>
        <S.AccreditBox>
          <span>이메일로 전송된 인증번호를 입력해주세요.</span>
          <S.TokenBox>
            <input
              type="text"
              placeholder="인증번호 6자리 입력"
              {...props.register("token")}
            />

            <span id="timer">
              {min}:{sec}
            </span>

            <S.TokenBtn
              type="button"
              isActive={time > 0 && time !== 10}
              disabled={
                !props.formState.isDirty ||
                props.formState.errors.token !== undefined ||
                time > 0
              }
            >
              확인
            </S.TokenBtn>
          </S.TokenBox>

          <button
            type="button"
            onClick={onClickReAuth}
            disabled={
              !props.formState.isDirty ||
              props.formState.errors.email !== undefined
            }
          >
            인증번호 재전송하기
          </button>
          <p>{props.formState.errors.token?.message}</p>
        </S.AccreditBox>
      </S.EmailBox>
    </>
  );
}
