import * as S from "./reserveMiddleStyles";
import type { Dayjs } from "dayjs";
import { useState } from "react";
import ReserveSelect from "../../../../commons/reserveSelect/reserveSelect";

export default function ReserveMiddle(): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>("");

  const onSelect = (value: Dayjs): void => {
    setSelectedDate(value);
    setIsModalOpen(true);
  };

  return (
    <S.Container>
      <S.Wrapper>
        <div>
          <S.StoreBox>
            <S.StoreCont>
              <S.FoodImg src="/defaultFood.webp" />
              <div>
                <S.Img src="/marker_or.webp" />
                <div>주소</div>
                <S.Img src="/store.webp" />
                <div>상호명</div>
              </div>
            </S.StoreCont>

            <S.Rating>5.0</S.Rating>
          </S.StoreBox>
          <S.ReserveBox>
            <div>
              {selectedDate !== null
                ? selectedDate.format("YYYY.MM.DD")
                : "날짜"}
            </div>
            <div>{selectedDate !== null ? selectedTime : "시간"}</div>
            <S.ReserveBtn
              style={{
                backgroundColor:
                  selectedDate !== null && selectedTime !== ""
                    ? "#fbb240"
                    : "#e5e5e5",
              }}
            >
              예약
            </S.ReserveBtn>
          </S.ReserveBox>
        </div>

        <S.MapBox>지도</S.MapBox>
      </S.Wrapper>
      <S.CalendarBox>
        <S.CalendarStyle fullscreen={false} onSelect={onSelect} />
      </S.CalendarBox>
      <ReserveSelect
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        setSelectedDate={setSelectedDate}
        selectedTime={selectedTime}
        setSelectedTime={setSelectedTime}
        selectedDate={selectedDate}
      />
    </S.Container>
  );
}
