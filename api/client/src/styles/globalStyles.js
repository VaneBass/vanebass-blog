import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    /* 根据 ThemeProvider 的 theme 属性应用相应的 css */
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all .5s linear;
  }
`;

const lightTheme = {
  body: "#fdfbfb",
};

const darkTheme = {
  body: "#242b2e",
  text: "#fff",
};

export { GlobalStyles, lightTheme, darkTheme };
