import styled from "@emotion/styled";
import LayoutHeader from "./header/layoutHeader";

interface ILayoutPros {
  children: JSX.Element;
}

const LayoutBody = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

export default function Layout(props: ILayoutPros): JSX.Element {
  return (
    <>
      <LayoutHeader />
      <LayoutBody>{props.children}</LayoutBody>
    </>
  );
}
