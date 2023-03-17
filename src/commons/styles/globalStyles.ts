import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "NotoSansKR";
    background-color: #f5f5f5;
  }

  @font-face {
    font-family: "NotoSansKR";
    src: url("/fonts/NotoSansKR-Medium.woff2");
  }
`;
