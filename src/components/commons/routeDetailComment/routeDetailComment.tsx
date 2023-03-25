import * as S from "./routeDetailCommentStyles";

export default function RouteDetailComment(): JSX.Element {
  const comments = [
    "댓글내용구아아아아아가라아아ㅏ아아가암내에ㅏㄴ매ㅔ앙아ㅣㅏㄱ람ㄴ암나아아아앙ㅁ나앤마안아암ㄴ",
    "댓글내용구아아아아아가라아아ㅏ아아가암내에ㅏㄴ매ㅔ앙아ㅣㅏㄱ람ㄴ암나아아아앙ㅁ나앤마안아암ㄴ",
    "댓글내용구아아아아아가라아아ㅏ아아가암내에ㅏㄴ매ㅔ앙아ㅣㅏㄱ람ㄴ암나아아아앙ㅁ나앤마안아암ㄴ",
  ];
  return (
    <S.Container>
      <S.WriteWrapper>
        <input type="text" placeholder="댓글을 입력해 주세요." />
        <button>등록</button>
      </S.WriteWrapper>
      <S.DivideLine></S.DivideLine>
      {comments.map((el, idx) => (
        <S.CommentsWrapper key={idx}>
          <S.ImgBox>
            <img src="/modify.webp" />
            <img src="/delete.webp" />
          </S.ImgBox>
          <S.userInfoBox>
            <img src="/userImg_small.webp" />
            <div>나는문어나는문어</div>
          </S.userInfoBox>
          <S.Comments>{el}</S.Comments>
        </S.CommentsWrapper>
      ))}
    </S.Container>
  );
}
