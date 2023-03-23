import styled from "@emotion/styled";
import { useRouter } from "next/router";
import LayoutHeader from "./header/layoutHeader";

interface ILayoutPros {
  children: JSX.Element;
}

const Container = styled.div`
  height: 100vh;
`;

const LayoutBody = styled.div`
  width: 1200px;
  margin: 30px auto 0;
`;

export default function Layout(props: ILayoutPros): JSX.Element {
  const router = useRouter();
  const HIDDEN_CSS = ["/"];
  const hiddenCss = HIDDEN_CSS.includes(router.asPath);

  return (
    <Container>
      <LayoutHeader />
      {!hiddenCss ? (
        <LayoutBody>{props.children}</LayoutBody>
      ) : (
        <>{props.children}</>
      )}
    </Container>
  );
}
