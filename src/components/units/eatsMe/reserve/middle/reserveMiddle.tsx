import * as S from "./reserveMiddleStyles";
import type { Dayjs } from "dayjs";
import { useState } from "react";
import { Modal } from "antd";

export default function ReserveMiddle(): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>("시간");

  const onSelect = (value: Dayjs): void => {
    setSelectedDate(value);
    setIsModalOpen(true);
  };

  const handleOk = (): void => {
    setIsModalOpen(false);
    setSelectedDate((prev) =>
      prev ? prev.set("hour", parseInt(selectedTime)) : null
    ); // 선택한 시간 값을 selectedDate에 반영합니다.
  };

  const handleCancel = (): void => {
    setIsModalOpen(false);
  };

  const handleTimeClick = (time: string): void => {
    // 버튼 클릭시 선택한 시간을 상태값에 저장하는 함수
    setSelectedTime(time);
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
                <span>주소</span>
                <S.Img src="/store.webp" />
                <span>상호명</span>
              </div>
            </S.StoreCont>
          </S.StoreBox>
          <S.ReserveBox>
            <div>
              {selectedDate ? selectedDate.format("YYYY.MM.DD") : "날짜"}
            </div>
            <div>{selectedDate !== null ? selectedTime : "시간"}</div>
            <button>예약</button>
          </S.ReserveBox>
        </div>

        <S.MapBox>지도</S.MapBox>
      </S.Wrapper>
      <S.CalendarBox>
        <S.CalendarStyle fullscreen={false} onSelect={onSelect} />
      </S.CalendarBox>

      <div>
        <Modal
          title={`선택한 날짜: ${
            selectedDate ? selectedDate.format("YYYY-MM-DD") : ""
          }`}
          width={520}
          visible={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          bodyStyle={{ height: "300px", overflow: "auto" }}
        >
          {["2:00", "3:00", "4:00"].map((time) => (
            <button
              style={{ cursor: "pointer", marginRight: "10px" }}
              key={time}
              onClick={() => handleTimeClick(time)}
            >
              {time}
            </button>
          ))}
        </Modal>
      </div>
    </S.Container>
  );
}
