import { createGlobalStyle, css } from "styled-components";

const styles = css`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
    font-family: "Montserrat", sans-serif;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  .toast-custom-icon {
    .Toastify__toast-body {
      gap: 4px;
    }
  }
`;

const GlobalStyles = createGlobalStyle`
  ${styles}
`;

export default GlobalStyles;
