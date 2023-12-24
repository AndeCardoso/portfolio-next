import styled from "styled-components";
import { colors } from "@src/global/colors";
import { breakpointScreenEnum } from "@src/constants/breakpoints";

export const Container = styled.section`
  width: 100%;
  padding-top: 7%;
  background-color: ${colors.BACKGROUND_COLOR};
  right: 64px;
  padding: 64px;
  gap: 64px;

  &:before {
    content: "";
    position: fixed;
    left: 45%;
    right: 115px;
    top: 0;
    height: 60px;
    background: ${colors.BACKGROUND_COLOR};
    z-index: 13;

    @media screen and (max-width: ${breakpointScreenEnum.MOBILE}px) {
      content: none;
    }
  }

  @media screen and (max-width: ${breakpointScreenEnum.MOBILE}px) {
    position: none;
    width: 100%;
    right: none;
    margin-top: 185%;
    padding: 0 24px;
    background-color: ${colors.BACKGROUND_COLOR};
    z-index: 10;
  }
`;
