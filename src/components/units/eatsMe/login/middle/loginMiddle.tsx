import * as S from "./loginMiddleStyles";

export default function LoginMiddle(): JSX.Element {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>
          <h1>로그인</h1>
          <span>Log-in</span>
        </S.Title>
        <S.DivideLine></S.DivideLine>
        <S.EmailBox>
          <input type="text" />
          <p></p>
        </S.EmailBox>
        <S.PasswordBox>
          <input type="password" />
          <p></p>
        </S.PasswordBox>
        <S.LoginBox>
          <button>로그인</button>
          <S.SuggestBox>
            <div>
              <span>아직 회원이 아니신가요?</span>
              <button>회원가입</button>
            </div>
            <div>
              <span>비밀번호를 잊어버리셨나요?</span>
              <button>비밀번호 찾기</button>
            </div>
          </S.SuggestBox>
        </S.LoginBox>
        <S.SNSBox>
          <span>SNS 로그인하기</span>
          <div>
            <img src="/kakao.webp" />
            <img src="/google.webp" />
          </div>
        </S.SNSBox>
      </S.Wrapper>
    </S.Container>
  );
}
