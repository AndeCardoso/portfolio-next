"use client";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body {
    font-family: 'Poppins', sans-serif;
    padding: 0;
    margin: 0;
    scroll-behavior: smooth;
  };
  h1, h2, h3, h4, p, span {
    color: white;
    margin: 0;
  }
  svg {
    transition: ease-in-out all 0.2s;
  }
`;

export default GlobalStyle;
