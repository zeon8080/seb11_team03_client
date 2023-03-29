import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as S from "./passwordSearchMiddleStyles";
import { schema } from "./passwordSearchMiddleValidation";
import { useState } from "react";

export default function PasswordSearchMiddle(): JSX.Element {
  const { register, formState, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");
  const showModal = (): void => {
    setOpen(true);
  };

  const handleOk = (): void => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = (): void => {
    console.log("Clicked cancel button");
    setOpen(false);
  };
  const onClickSearch = (): void => {
    showModal();
  };

  return (
    <form onSubmit={handleSubmit(onClickSearch)}>
      <S.Container>
        <S.Wrapper>
          <S.Title>비밀번호 찾기</S.Title>
          <S.DivideLine></S.DivideLine>
          <S.ModalBtn
            title="회원님의 이메일 주소로 임시 비밀번호가 전송되었습니다."
            open={open}
            onOk={handleOk}
            okText="확인"
            cancelText="취소"
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
          >
            <S.ModalCont>
              <img src="/logoIcon_bk.webp" />
              <span>로그인 화면으로 이동됩니다.</span>
            </S.ModalCont>
          </S.ModalBtn>
          <S.EmailBox>
            <span>이메일</span>
            <input type="text" {...register("email")} placeholder="E-mail" />
            <p>{formState.errors.email?.message}</p>
          </S.EmailBox>
          <S.SearchBtn>확인</S.SearchBtn>
        </S.Wrapper>
      </S.Container>
    </form>
  );
}
