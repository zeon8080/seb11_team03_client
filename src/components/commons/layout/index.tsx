import styled from "@emotion/styled";
import { useRouter } from "next/router";
import Chatbot from "./chatbot/chatbot";
import LayoutHeader from "./header/layoutHeader";

interface ILayoutPros {
  children: JSX.Element;
}
const breakpoints = [576, 768, 992, 1200];
const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);
// ${mq[0]} {
//   font-size: 50px;
// }

const Container = styled.div`
  height: 100vh;
`;

const LayoutBody = styled.div`
  width: 1200px;
  margin: 30px auto 0;
  ${mq[3]} {
    width: 100%;
  }
`;

export default function Layout(props: ILayoutPros): JSX.Element {
  const router = useRouter();
  const HIDDEN_CSS = ["/"];
  const hiddenCss = HIDDEN_CSS.includes(router.asPath);

  return (
    <Container>
      <LayoutHeader />
      {/* <Chatbot /> */}
      {!hiddenCss ? (
        <LayoutBody>{props.children}</LayoutBody>
      ) : (
        <>{props.children}</>
      )}
    </Container>
  );
}
