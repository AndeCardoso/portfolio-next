import { colors } from "@src/global/colors";
import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: ${colors.BACKGROUND_COLOR};
  padding-top: 200px;
  margin-top: -200px;
`;

export const Wrapper = styled.article`
  width: 100%;
  height: 100%;
  margin-top: 64px;
`;
