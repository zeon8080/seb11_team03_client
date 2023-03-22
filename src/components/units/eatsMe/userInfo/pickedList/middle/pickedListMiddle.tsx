import * as S from "./pickedListMiddleStyles";

export default function PickedListMiddle(): JSX.Element {
  return (
    <S.Container>
      <S.Title>목록</S.Title>
      <S.ListWrapper>
        <S.StoreBox>
          <S.StoreCont>
            <S.FoodImg src="/defaultfood.webp" />
            <div>
              <S.RatingBox>
                <S.Rating>4.6</S.Rating>
                <S.Img src="/heart_fill.webp" alt="" />
              </S.RatingBox>

              <S.StoreName>
                <S.Img src="/store.webp" />
                <span>가나다라마바사아자차카</span>
              </S.StoreName>
              <span>월요일 휴무</span>
              <S.TimeInfoBox>
                <div>Open 11:00</div>
                <div>Close 22:00</div>
              </S.TimeInfoBox>
            </div>
          </S.StoreCont>
          <S.StoreInfoBox>
            <div>
              <S.Img src="/marker_or.webp" />
              <span>서울특별시 구로구 디지털로 300 </span>
            </div>
            <div>
              <S.Img src="/phone.webp" />
              <span>02-123-4567</span>
            </div>
          </S.StoreInfoBox>
        </S.StoreBox>
        <S.StoreBox>
          <S.StoreCont>
            <S.FoodImg src="/defaultfood.webp" />
            <div>
              <S.RatingBox>
                <S.Rating>4.6</S.Rating>
                <S.Img src="/heart_fill.webp" alt="" />
              </S.RatingBox>

              <S.StoreName>
                <S.Img src="/store.webp" />
                <span>가나다라마바사아자차카</span>
              </S.StoreName>
              <span>월요일 휴무</span>
              <S.TimeInfoBox>
                <div>Open 11:00</div>
                <div>Close 22:00</div>
              </S.TimeInfoBox>
            </div>
          </S.StoreCont>
          <S.StoreInfoBox>
            <div>
              <S.Img src="/marker_or.webp" />
              <span>서울특별시 구로구 디지털로 300 </span>
            </div>
            <div>
              <S.Img src="/phone.webp" />
              <span>02-123-4567</span>
            </div>
          </S.StoreInfoBox>
        </S.StoreBox>
        <S.StoreBox>
          <S.StoreCont>
            <S.FoodImg src="/defaultfood.webp" />
            <div>
              <S.RatingBox>
                <S.Rating>4.6</S.Rating>
                <S.Img src="/heart_fill.webp" alt="" />
              </S.RatingBox>

              <S.StoreName>
                <S.Img src="/store.webp" />
                <span>가나다라마바사아자차카</span>
              </S.StoreName>
              <span>월요일 휴무</span>
              <S.TimeInfoBox>
                <div>Open 11:00</div>
                <div>Close 22:00</div>
              </S.TimeInfoBox>
            </div>
          </S.StoreCont>
          <S.StoreInfoBox>
            <div>
              <S.Img src="/marker_or.webp" />
              <span>서울특별시 구로구 디지털로 300 </span>
            </div>
            <div>
              <S.Img src="/phone.webp" />
              <span>02-123-4567</span>
            </div>
          </S.StoreInfoBox>
        </S.StoreBox>
      </S.ListWrapper>
    </S.Container>
  );
}
