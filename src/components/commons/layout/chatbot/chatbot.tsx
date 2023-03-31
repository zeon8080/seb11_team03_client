import * as S from "./chatbotStyles";
interface IChatbot {
  isToggle: boolean;
  changeIsToggle: () => void;
}

export default function Chatbot(props: IChatbot): JSX.Element {
  return (
    <S.Container isToggle={props.isToggle}>
      <S.Header>
        <img src="/chatbotLogo.webp" />
        <button onClick={props.changeIsToggle}></button>
      </S.Header>
      <S.FAQBox>
        <div>맛집 찾나요?</div>
        <div>사용법이 궁금하신가요?</div>
        <div>코스 작성 방법이 궁금하신가요?</div>
      </S.FAQBox>
      <S.Content>
        <S.ChatBotText>
          <img src="/logoIcon_bk.webp" />
          <div>문의사항이 있으신가요?</div>
        </S.ChatBotText>

        <S.UserText>
          <div>강남구 맛집 알려줘</div>
        </S.UserText>
      </S.Content>

      <S.ChatInput>
        <input type="text" />
        <img src="/chat.webp" />
      </S.ChatInput>
    </S.Container>
  );
}
