import * as S from "./searchBarStyles";

export default function SearchBar(): JSX.Element {
  return (
    <S.Container>
      <input type="text" placeholder="검색어를 입력해 주세요." />
      <img src="/search.webp" />
    </S.Container>
  );
}
