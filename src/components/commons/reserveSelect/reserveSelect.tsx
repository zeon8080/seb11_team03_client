import { Modal } from "antd";
import { Dispatch, SetStateAction } from "react";
import type { Dayjs } from "dayjs";
import * as S from "./reserveSelectStyles";
import { UseFormSetValue } from "react-hook-form";
import { IReserveFormData } from "../../units/eatsMe/reserve/middle/reserveMiddle";

interface IReserveSelect {
  setValue: UseFormSetValue<IReserveFormData>;
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  setSelectedDate: Dispatch<SetStateAction<Dayjs | null>>;
  setSelectedTime: Dispatch<SetStateAction<string>>;
  selectedTime: string;
  selectedDate: Dayjs | null;
}

export default function ReserveSelect(props: IReserveSelect): JSX.Element {
  const Times = [
    "10:00",
    "12:00",
    "14:00",
    "16:00",
    "18:00",
    "20:00",
    "22:00",
    "24:00",
  ];

  const handleOk = (): void => {
    props.setIsModalOpen(false);
    props.setSelectedDate((prev) =>
      prev !== null ? prev.set("hour", parseInt(props.selectedTime)) : null
    );
  };

  const handleCancel = (): void => {
    props.setIsModalOpen(false);
  };

  const handleTimeClick = (time: string, index: number): void => {
    props.setSelectedTime(time);
    props.setValue("reservation_time", index + 1);
  };

  return (
    <Modal
      title={`선택 날짜: ${
        props.selectedDate !== null
          ? props.selectedDate.format("YYYY-MM-DD")
          : ""
      }`}
      open={props.isModalOpen}
      onCancel={handleCancel}
      onOk={handleOk}
      okText="확인"
      cancelText="취소"
      okButtonProps={{
        style: {
          backgroundColor: "#fbb240",
          color: "white",
        },
      }}
      cancelButtonProps={{
        style: { backgroundColor: "#fbb240", color: "white" },
      }}
      bodyStyle={{ height: "300px", overflow: "auto", paddingLeft: "36px" }}
    >
      {Times.map((time, index) => (
        <S.TimesBtn
          key={time}
          onClick={() => {
            handleTimeClick(time, index);
          }}
          style={{
            backgroundColor: props.selectedTime === time ? "#fbb240" : "",
          }}
        >
          {time}
        </S.TimesBtn>
      ))}
    </Modal>
  );
}
