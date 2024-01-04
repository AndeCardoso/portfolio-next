"use client";
import { createGlobalStyle } from "styled-components";
import { colors } from "./colors";

const GlobalStyle = createGlobalStyle`
  html, body {
    font-family: var(--font-poppins);
    padding: 0;
    margin: 0;
    scroll-behavior: smooth;
    background-color: ${colors.BACKGROUND_COLOR};

    &::-webkit-scrollbar {
      width: 6px;
    }
    &::-webkit-scrollbar-track {
      background:  ${colors.HEADER_BACKGROUND};
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${colors.PRIMARY};
      border-radius: 50px;
    }
  };
  h1, h2, h3, h4, p, span {
    font-family: var(--font-poppins);
    color: ${colors.WHITE};
    margin: 0;
  }
  svg {
    transition: ease-in-out all 0.2s;
  }
`;

export default GlobalStyle;
