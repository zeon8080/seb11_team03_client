import MainMap from "../../../../commons/mainPanel/mainMap";
import * as S from "./mainMiddleStyles";

export default function MainMiddle(): JSX.Element {
  return (
    <S.Container>
      {/* <img src={memoizedImageUrl} /> */}
      <S.Wrapper>
        {/* 잇츠미 */}
        {/* <MainPanel
          {...data}
          areaNames={areaNames["잇츠미"]}
          panelXpos={0}
          panelYpos={0}
          areaImg={areaImgs[0]}
          title={"잇츠미"}
        /> */}
        <MainMap />
      </S.Wrapper>
    </S.Container>
  );
}
