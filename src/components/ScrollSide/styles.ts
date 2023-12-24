import styled from "styled-components";
import { colors } from "@src/global/colors";
import { breakpointScreenEnum } from "@src/constants/breakpoints";

export const Container = styled.section`
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
    right: none;
    padding: 0 24px;
    padding-bottom: 32px;
    border-bottom: 1px solid ${colors.PRIMARY};
    background-color: ${colors.BACKGROUND_COLOR};
    z-index: 10;
  }
`;
