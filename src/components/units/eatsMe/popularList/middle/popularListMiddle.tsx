import Head from "next/head";
import { useState } from "react";
import { useEffectTmapLoadPopular } from "../../../../commons/hooks/custom/useEffectTmapLoadPopular";
import * as S from "./popularListMiddleStyles";

declare const window: typeof globalThis & {
  Tmapv2: any;
};

export default function PopularListMiddle(): JSX.Element {
  const [map, setMap] = useState();
  const [marker, setMarker] = useState<any>(null);
  useEffectTmapLoadPopular({ setMap });

  const onClickStore = (event) => {
    if (marker !== null) {
      marker.setMap(null);
    }
    const position = new window.Tmapv2.LatLng(
      ...event.currentTarget.id.split(",")
    );
    const PTbounds = new window.Tmapv2.LatLngBounds();
    PTbounds.extend(position);
    const TMarker = new window.Tmapv2.Marker({
      position,
      icon: "/marker_or.webp",
      iconSize: new window.Tmapv2.Size(40, 40),
      map,
    });
    map.fitBounds(PTbounds);
    map.setZoom(15);
    setMarker(TMarker);
  };
  return (
    <>
      <Head>
        <script src="https://apis.openapi.sk.com/tmap/jsv2?version=1&appKey=kzTmdjGzc91aQiicRAWjBCpCySY90Cs3AZJ7iVbd"></script>
      </Head>
      <S.Container>
        <S.ListWrapper>
          <S.StoreBox onClick={onClickStore} id="37.563365,126.982852">
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
          <S.StoreBox onClick={onClickStore} id="37.483470,126.899607">
            <S.StoreCont>
              <S.FoodImg src="/defaultfood.webp" />
              <div>
                <S.Rating>4.6</S.Rating>
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
          <S.StoreBox onClick={onClickStore} id="37.540027,127.053358">
            <S.StoreCont>
              <S.FoodImg src="/defaultfood.webp" />
              <div>
                <S.Rating>4.6</S.Rating>
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
          <S.StoreBox onClick={onClickStore} id="37.507858,127.105266">
            <S.StoreCont>
              <S.FoodImg src="/defaultfood.webp" />
              <div>
                <S.Rating>4.6</S.Rating>
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
        <S.MapBox>
          <div
            id="TMapApp"
            style={{
              height: "100%",
              width: "100%",
            }}
          />
        </S.MapBox>
      </S.Container>
    </>
  );
}
