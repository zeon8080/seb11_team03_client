import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as S from "./joinMiddleStyles";
import { schema } from "./joinMidleValidation";

// interface IJoinMiddleFormData {
//   email: string;
//   nickname: string;
//   password: string;
//   passwordCheck: string;
// }

export default function JoinMiddle(): JSX.Element {
  const [time, setTime] = useState(10);
  const [isStarted, setIsStarted] = useState(false);
  const min = Math.floor(time / 60);
  const sec = String(time % 60).padStart(2, "0");

  const { register, formState, handleSubmit } = useForm<IJoinMiddleFormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  useEffect(() => {
    let timer;

    if (isStarted) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }

    if (time <= 0) {
      clearInterval(timer);
      setIsStarted(false);
    }

    return () => clearInterval(timer);
  }, [isStarted, time]);

  const onClickAuth = (): void => {
    setIsStarted(true);
  };

  const onClickReAuth = (): void => {
    setTime(5);
    setIsStarted(false);
    onClickAuth();
  };

  const onClickJoin = (): void => {};

  return (
    <form onSubmit={handleSubmit(onClickJoin)}>
      <S.Container>
        <S.Wrapper>
          <S.Title>
            <h1>회원가입</h1>
            <span>join us</span>
          </S.Title>

          <S.DivideLine></S.DivideLine>
          <S.EmailBox>
            <span>이메일</span>
            <input type="text" placeholder="이메일" {...register("email")} />
            <p>{formState.errors.email?.message}</p>
            <button type="button" onClick={onClickAuth}>
              인증번호 보내기
            </button>
            <S.AccreditBox>
              <span>이메일로 전송된 인증코드를 입력해주세요.</span>
              <S.TokenBox>
                <input type="text" placeholder="인증코드 6자리 입력" />
                <span id="timer">
                  {min}:{sec}
                </span>
                <button
                  type="button"
                  // style={{
                  //   backgroundColor: time === 0 ? "#a5a5a5" : "#fbb240",
                  // }}
                >
                  확인
                </button>
              </S.TokenBox>

              <button type="button" onClick={onClickReAuth}>
                인증번호 재전송하기
              </button>
            </S.AccreditBox>
          </S.EmailBox>
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
            <button type="button">회원가입</button>
            <div>
              이미 아이디가 있으신가요?
              <button>로그인</button>
            </div>
          </S.BtnBox>
        </S.Wrapper>
      </S.Container>
    </form>
  );
}
