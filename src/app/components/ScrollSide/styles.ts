import styled from "styled-components";
import { colors } from "@/global/colors";

export const Container = styled.section`
  width: 85%;
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
  }
`;
