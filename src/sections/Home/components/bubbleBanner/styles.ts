import { breakpointScreenEnum } from "@src/constants/breakpoints";
import { colors } from "@src/global/colors";
import styled from "styled-components";
import { poppins } from "@app/fonts";

export const Container = styled.h1`
  width: fit-content;
  display: flex;
  padding: 68px;
  flex-direction: column;
  font-size: 75px;
  font-family: ${poppins.style.fontFamily};
  border-radius: 264px;
  margin: 40px 0 0 -230px;
  background-color: ${colors.BACKGROUND_COLOR};
  white-space: pre-line;

  @media screen and (max-width: ${breakpointScreenEnum.MOBILE}px) {
    font-size: 36px;
    margin: -216px 0 -124px 0;
    text-align: center;
    border-radius: 50%;
    height: 180px;
  }
`;
