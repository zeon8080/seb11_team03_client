import { MouseEvent, useRef } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { fetchLoginUserState } from "../../../commons/stores";
import {
  IBoardReturn,
  ICreateCommentInput,
  IUpdateCommentInput,
} from "../../../commons/types/generated/types";
import { useClickCreateComment } from "../hooks/custom/useClickCreateComment";
import { useClickDeleteComment } from "../hooks/custom/useClickDeleteComment";
import { useClickUpdateComment } from "../hooks/custom/useClickUpdateComment";
import { useSetIsActive } from "../hooks/custom/useSetIsActive";
import { useSetIsToggle } from "../hooks/custom/useSetIsToggle";
import { wrapFormAsync } from "../libraries/asyncFunc";
import RouteDetailCommentReply from "../routeDetailCommentReply/routeDetailCommentReply";
import * as S from "./routeDetailCommentStyles";

interface IRouteDetailCommentProps {
  data: IBoardReturn;
}

export default function RouteDetailComment(
  props: IRouteDetailCommentProps
): JSX.Element {
  const { register, handleSubmit } = useForm<ICreateCommentInput>();
  const {
    register: register2,
    handleSubmit: handleSubmit2,
    setValue: setValue2,
  } = useForm<IUpdateCommentInput>();
  const [isReply, changeIsReply, setIsReply] = useSetIsActive();
  const [isCommentModify, changeIsCommentModify, setIsCommentModify] =
    useSetIsToggle();
  const { onClickCreateComment } = useClickCreateComment();
  const { onClickUpdateComment } = useClickUpdateComment();
  const { onClickDeleteComment } = useClickDeleteComment();
  const [fetchLoginUser] = useRecoilState(fetchLoginUserState);
  const CommentModifyRef = useRef<HTMLTextAreaElement>(null);

  const onChangeCommentModify = (): void => {
    if (CommentModifyRef.current !== null) {
      CommentModifyRef.current.style.height = `${
        CommentModifyRef.current?.scrollHeight ?? 0
      }px`;
    }
    // 현재 제일 마지막 댓글만 작동되는중 아마도 여러개라서 그런듯 실제 데이터 넣고 실험해볼것
  };

  const onClickCommentModifyIcon =
    (boardId: string) =>
    (event: MouseEvent<HTMLImageElement>): void => {
      event.stopPropagation();
      setIsReply("");
      setValue2("boardId", boardId);
      setValue2("commentId", event.currentTarget.id);
      changeIsCommentModify();
    };

  const onClickComment = (event: MouseEvent<HTMLDivElement>): void => {
    if (!isCommentModify && fetchLoginUser.id !== undefined) {
      changeIsReply(event);
    }
  };

  // 전체적으로 입력된 값을이 ""이면 모달창
  // ImgBox를 현재 접속한 유저 아이디와 댓글작성 유저 아이디와 같으면 보이게 처리 이렇게 하면 해당 유저가 아니면 안보이디 따로 분기처리 필요없음
  // ImgBox안 img의 id는 댓글아이디
  // 현재 전체적으로 refetchQueries에서 variables를 생략하고 있는데 이게 정상적으로 동작 하는지 체크

  const onClickCommentSubmit = (data: { comment: string }): void => {
    void onClickCreateComment({
      comment: data.comment,
      boardId: props.data.id ?? "",
    });
  };

  return (
    <S.Container>
      <S.WriteWrapper
        onSubmit={wrapFormAsync(handleSubmit(onClickCommentSubmit))}
      >
        <input
          type="text"
          placeholder="댓글을 입력해 주세요."
          {...register("comment")}
        />
        <button>등록</button>
      </S.WriteWrapper>
      <S.DivideLine></S.DivideLine>
      {props.data?.comments?.map((el) => (
        <S.CommentContainer key={el.id}>
          <S.CommentsWrapper id={el.id} onClick={onClickComment}>
            {fetchLoginUser.id === el.user?.id ? (
              <S.ImgBox>
                <img
                  src="/modify.webp"
                  id={props.data.id ?? ""}
                  onClick={onClickCommentModifyIcon(props.data.id ?? "")}
                />
                <img
                  src="/delete.webp"
                  id={el.id}
                  onClick={() => {
                    void onClickDeleteComment;
                  }}
                />
              </S.ImgBox>
            ) : (
              <></>
            )}
            <S.UserInfoBox>
              <img
                src={
                  el.user?.userImg !== null
                    ? `https://storage.googleapis.com/${el.user?.userImg}`
                    : "/userImg_small.webp"
                }
              />
              <div>{el.user?.nickname}</div>
            </S.UserInfoBox>
            {isCommentModify ? (
              <S.CommentsModifyBox
                onSubmit={wrapFormAsync(
                  handleSubmit2(onClickUpdateComment(setIsCommentModify))
                )}
              >
                <S.CommentsModifyTextarea
                  {...register2("comment", { onChange: onChangeCommentModify })}
                  ref={CommentModifyRef}
                />
                <S.CommentsModifySubmit>수정</S.CommentsModifySubmit>
              </S.CommentsModifyBox>
            ) : (
              <S.Comments>{el.comment}</S.Comments>
            )}
          </S.CommentsWrapper>
          <RouteDetailCommentReply
            data={el.replies}
            id={el.id}
            isReply={isReply}
            setIsReply={setIsReply}
          />
        </S.CommentContainer>
      ))}
    </S.Container>
  );
}
