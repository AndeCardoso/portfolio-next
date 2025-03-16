import { breakpointScreenEnum } from "@constants/breakpoints";
import { colors } from "@global/colors";
import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: ${colors.BACKGROUND_COLOR};
  scroll-margin-top: 200px;
  height: auto;

  @media screen and (max-width: ${breakpointScreenEnum.MOBILE}px) {
    align-items: center;
  }
`;

export const Wrapper = styled.article`
  width: 100%;
  height: 100%;
  margin-top: 32px;
`;
