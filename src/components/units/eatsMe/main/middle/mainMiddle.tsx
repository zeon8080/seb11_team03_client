import MainMap from "../../../../commons/mainPanel/mainMap";
import * as S from "./mainMiddleStyles";

export default function MainMiddle(): JSX.Element {
  return (
    <S.Container>
      <S.Wrapper>
        <MainMap />
      </S.Wrapper>
    </S.Container>
  );
}
