import {
  ChangeEvent,
  Dispatch,
  MouseEvent,
  SetStateAction,
  useRef,
} from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { fetchLoginUserState } from "../../../commons/stores";
import {
  ICreateReplyInput,
  IReply,
  IUpdateReplyInput,
} from "../../../commons/types/generated/types";
import { useClickCreateReply } from "../hooks/custom/useClickCreateReply";
import { useClickDeleteReply } from "../hooks/custom/useClickDeleteReply";
import { useClickUpdateReply } from "../hooks/custom/useClickUpdateReply";
import { useSetIsToggle } from "../hooks/custom/useSetIsToggle";
import { wrapFormAsync } from "../libraries/asyncFunc";
import * as S from "./routeDetailCommentReplyStyles";

interface IRouteDetailCommentReplyProps {
  data: IReply[];
  id: string;
  isReply: string;
  setIsReply: Dispatch<SetStateAction<string>>;
}

export default function RouteDetailCommentReply(
  props: IRouteDetailCommentReplyProps
): JSX.Element {
  const [isReplyModify, changeIsReplyModify, setIsReplyModify] =
    useSetIsToggle();
  const [fetchLoginUser] = useRecoilState(fetchLoginUserState);
  const replyCreateRef = useRef<HTMLTextAreaElement>(null);
  const replyModify = useRef<HTMLTextAreaElement>(null);
  const { handleSubmit, setValue } = useForm<ICreateReplyInput>();
  const {
    register: register2,
    handleSubmit: handleSubmit2,
    setValue: setValue2,
  } = useForm<IUpdateReplyInput>();
  const { onClickCreateReply } = useClickCreateReply();
  const { onClickUpdateReply } = useClickUpdateReply();
  const { onClickDeleteReply } = useClickDeleteReply();

  const onChangeReplyCreate = (
    event: ChangeEvent<HTMLTextAreaElement>
  ): void => {
    if (replyCreateRef.current !== null) {
      replyCreateRef.current.style.height = `${
        replyCreateRef.current?.scrollHeight ?? 0
      }px`;
    }
    setValue("commentId", props.id);
    setValue("reply", event.currentTarget.value);
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
              <img
                src={
                  props.data.user?.userImg !== null
                    ? `https://storage.googleapis.com/${props.data.user?.userImg}`
                    : "/userImg_small.webp"
                }
              />
              <div>{props.data.user?.nickname}</div>
            </S.ReplyUserInfoBox>
            <S.ReplySubmit>등록</S.ReplySubmit>
            <S.ReplyTextarea
              onChange={onChangeReplyCreate}
              ref={replyCreateRef}
            />
          </S.ReplyWrapper>
        </S.Container>
      )}

      {props.data.map((el) => (
        <S.Container key={el.id}>
          <S.ImgWrapper>
            <img src="/commentArrow.webp" />
          </S.ImgWrapper>
          <S.ReplyWrapper>
            {fetchLoginUser.id === el.user?.id ? (
              <S.ImgBox>
                <img
                  src="/modify.webp"
                  id={el.id}
                  onClick={onClickReplyModifyIcon(props.id)}
                />
                <img
                  src="/delete.webp"
                  id={el.id}
                  onClick={() => {
                    void onClickDeleteReply;
                  }}
                />
              </S.ImgBox>
            ) : (
              <></>
            )}
            <S.ReplyUserInfoBox>
              <img
                src={
                  el.user?.userImg !== null
                    ? `https://storage.googleapis.com/${el.user?.userImg}`
                    : "/userImg_small.webp"
                }
              />
              <div>{el.user?.nickname}</div>
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
              <S.Reply>{el.comments}</S.Reply>
            )}
          </S.ReplyWrapper>
        </S.Container>
      ))}
    </>
  );
}
