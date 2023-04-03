import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useSetIsToggle } from "../hooks/custom/useSetIsToggle";
import Chatbot from "./chatbot/chatbot";
import LayoutHeader from "./header/layoutHeader";

interface ILayoutPros {
  children: JSX.Element;
}
const breakpoints = [576, 800, 1200];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const Container = styled.div`
  height: 100vh;
`;

const LayoutBody = styled.div`
  width: 1200px;
  margin: 30px auto 0;
  ${mq[2]} {
    width: 100%;
    margin: 0 auto;
  }
`;
const ChatbotWrapper = styled.div`
  position: fixed;
  right: 120px;
  bottom: 90px;
  z-index: 100;
  ${mq[2]} {
    right: 50px;
  }
`;
const ChatBtn = styled.div`
  width: 52px;
  height: 52px;
  background: url(/chatbot.webp) no-repeat;
  background-size: contain;
  text-indent: -9999px;
  cursor: pointer;
  :hover {
    background-image: url(/chatbot_or.webp);
  }
`;

export default function Layout(props: ILayoutPros): JSX.Element {
  const router = useRouter();
  const HIDDEN_CSS = ["/"];
  const hiddenCss = HIDDEN_CSS.includes(router.asPath);
  const [isToggle, changeIsToggle] = useSetIsToggle();

  return (
    <Container>
      <LayoutHeader hiddenCss={hiddenCss} />

      {!hiddenCss ? (
        <LayoutBody>
          {props.children}
          <ChatbotWrapper>
            <ChatBtn onClick={changeIsToggle}>쳇봇</ChatBtn>
            <Chatbot isToggle={isToggle} changeIsToggle={changeIsToggle} />
          </ChatbotWrapper>
        </LayoutBody>
      ) : (
        <>{props.children}</>
      )}
    </Container>
  );
}
