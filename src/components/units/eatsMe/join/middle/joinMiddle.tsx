export default function JoinMiddle(): JSX.Element {
  return (
    <>
      <div>
        <title></title>
        <span>join us</span>
        <div>divide라인</div>
        <div>
          <span>이메일</span>
          <input type="text" />
          <button>인증번호 보내기</button>
          <div>
            <span>인증코드입력해주세요</span>
            <input type="text" />
            <span>3:00</span>
            <button>확인</button>
            <span>인증번호 재전송하기</span>
          </div>
        </div>
        <div>
          <span>비밀번호</span>
          <input type="password" />
        </div>
        <div>
          <span>비밀번호 확인</span>
          <input type="password" />
        </div>
        <span>닉네임</span>
        <div>
          <input type="text" />
          <button>중복</button>
        </div>

        <button>회원가입</button>
        <button>로그인하러가기</button>
      </div>
    </>
  );
}
