import { createGlobalStyle } from "styled-components";

export const GlobalsStyles = createGlobalStyle`
  *, 
  *::before, 
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: background .3s ease-in-out;
  }

  html {
    font-size: 100%;
  }

  body, input, button {
    font-family: 'Poppins', sans-serif;
  }

  p {
    line-height: 1.4;
  }

  button {
    outline: none;
    border: none;
    cursor: pointer;
  }

  input, textarea {
    outline: none;
    border: none;
  }

  a {
    text-decoration: none;
  }
`;