import { breakpointScreenEnum } from "@constants/breakpoints";
import { colors } from "@global/colors";
import styled from "styled-components";
import { poppins } from "@app/fonts";

export const Container = styled.h1`
  flex-direction: row;
  width: fit-content;
  display: flex;
  padding: 58px;
  font-size: 75px;
  border-radius: 264px;
  margin: 40px 0 0 -245px;
  font-family: ${poppins.style.fontFamily};
  background-color: ${colors.BACKGROUND_COLOR};
  white-space: pre-line;
  align-items: center;
  gap: 32px;

  @media screen and (max-width: ${breakpointScreenEnum.MOBILE}px) {
    font-size: 36px;
    margin: -216px 0 -124px 0;
    flex-direction: column;
    text-align: center;
    border-radius: 50%;
    height: 240px;
  }
`;
