import styled from "styled-components";
import { breakpointScreenEnum } from "@src/constants/breakpoints";

export const Container = styled.article`
  display: flex;
  width: 100%;
  gap: 32px;

  @media screen and (max-width: ${breakpointScreenEnum.MOBILE}px) {
    flex-direction: column-reverse;
  }
`;
