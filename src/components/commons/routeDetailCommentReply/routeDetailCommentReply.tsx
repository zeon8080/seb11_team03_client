import { MouseEvent, useRef } from "react";
import { useForm } from "react-hook-form";
import {
  ICreateReplyInput,
  IUpdateReplyInput,
} from "../../../commons/types/generated/types";
import { useClickCreateReply } from "../hooks/custom/useClickCreateReply";
import { useClickDeleteReply } from "../hooks/custom/useClickDeleteReply";
import { useClickUpdateReply } from "../hooks/custom/useClickUpdateReply";
import { useSetIsToggle } from "../hooks/custom/useSetIsToggle";
import { wrapFormAsync } from "../libraries/asyncFunc";
import * as S from "./routeDetailCommentReplyStyles";

export default function RouteDetailCommentReply(props: any): JSX.Element {
  const [isReplyModify, changeIsReplyModify, setIsReplyModify] =
    useSetIsToggle();
  const replyCreateRef = useRef<HTMLTextAreaElement>(null);
  const replyModify = useRef<HTMLTextAreaElement>(null);
  const { register, handleSubmit, setValue } = useForm<ICreateReplyInput>();
  const {
    register: register2,
    handleSubmit: handleSubmit2,
    setValue: setValue2,
  } = useForm<IUpdateReplyInput>();
  const { onClickCreateReply } = useClickCreateReply();
  const { onClickUpdateReply } = useClickUpdateReply();
  const { onClickDeleteReply } = useClickDeleteReply();

  const comments = [
    "대댓글내용구아아아아아가라아아ㅏ아아가암내에ㅏㄴ매ㅔ앙아ㅣㅏㄱ람ㄴ암나아아아앙ㅁ나앤마안아암ㄴ",
    "대댓글내용구아아아아아가라아아ㅏ아아가암내에ㅏㄴ매ㅔ앙아ㅣㅏㄱ람ㄴ암나아아아앙ㅁ나앤마안아암ㄴ",
    "대댓글내용구아아아아아가라아아ㅏ아아가암내에ㅏㄴ매ㅔ앙아ㅣㅏㄱ람ㄴ암나아아아앙ㅁ나앤마안아암ㄴ",
  ];
  const onChangeReplyCreate = (): void => {
    if (replyCreateRef.current !== null) {
      replyCreateRef.current.style.height = `${
        replyCreateRef.current?.scrollHeight ?? 0
      }px`;
    }
    setValue("commentId", props.id);
  };

  const onChangeReplyModify = (): void => {
    if (replyModify.current !== null) {
      replyModify.current.style.height = `${
        replyModify.current?.scrollHeight ?? 0
      }px`;
    }
  };

  const onClickReplyModifyIcon =
    (commentId: string) =>
    (event: MouseEvent<HTMLImageElement>): void => {
      event.stopPropagation();
      props.setIsReply("");
      setValue2("commentId", commentId);
      setValue2("replyId", event.currentTarget.id);
      changeIsReplyModify();
    };

  // 전체적으로 입력된 값을이 ""이면 모달창
  // ImgBox를 현재 접속한 유저 아이디와 대댓글작성 유저 아이디와 같으면 보이게 처리 이렇게 하면 해당 유저가 아니면 안보이디 따로 분기처리 필요없음

  return (
    <>
      {props.isReply === props.id && (
        <S.Container>
          <S.ImgWrapper>
            <img src="/commentArrow.webp" />
          </S.ImgWrapper>

          <S.ReplyWrapper
            onSubmit={wrapFormAsync(
              handleSubmit(onClickCreateReply(props.setIsReply))
            )}
          >
            <S.ReplyUserInfoBox>
              <img src="/userImg_small.webp" />
              <div>나는문어나는문어</div>
            </S.ReplyUserInfoBox>
            <S.ReplySubmit>등록</S.ReplySubmit>
            <S.ReplyTextarea
              {...register("reply", { onChange: onChangeReplyCreate })}
              ref={replyCreateRef}
            />
          </S.ReplyWrapper>
        </S.Container>
      )}

      {/* 대댓글 map 돌렷 */}
      <S.Container>
        <S.ImgWrapper>
          <img src="/commentArrow.webp" />
        </S.ImgWrapper>
        <S.ReplyWrapper>
          <S.ImgBox>
            <img
              src="/modify.webp"
              id={"대댓글아이디"}
              onClick={onClickReplyModifyIcon(props.id)}
            />
            <img
              src="/delete.webp"
              id={"대댓글아이디"}
              onClick={() => {
                void onClickDeleteReply;
              }}
            />
          </S.ImgBox>
          <S.ReplyUserInfoBox>
            <img src="/userImg_small.webp" />
            <div>나는문어나는문어</div>
          </S.ReplyUserInfoBox>
          {isReplyModify ? (
            <S.ReplyModifyBox
              onSubmit={wrapFormAsync(
                handleSubmit2(onClickUpdateReply(setIsReplyModify))
              )}
            >
              <S.ReplyMModifyTextarea
                {...register2("reply", { onChange: onChangeReplyModify })}
                ref={replyModify}
              />
              <S.ReplyModifySubmit>수정</S.ReplyModifySubmit>
            </S.ReplyModifyBox>
          ) : (
            <S.Reply>{comments}</S.Reply>
          )}
        </S.ReplyWrapper>
      </S.Container>
    </>
  );
}
