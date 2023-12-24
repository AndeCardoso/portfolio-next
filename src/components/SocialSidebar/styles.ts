import styled from "styled-components";
import { breakpointScreenEnum } from "@src/constants/breakpoints";
import { colors } from "@src/global/colors";

export const Container = styled.div`
  width: 90px;
  height: 100vh;
  position: sticky;
  top: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
  border-left: 0.2px solid ${colors.PRIMARY};
  background-color: ${colors.BACKGROUND_COLOR};

  @media screen and (max-width: ${breakpointScreenEnum.MOBILE}px) {
    width: 100%;
    height: auto;
    padding: 64px 0 24px 0;
    justify-content: center;
    border: none;
  }
`;

export const Wrapper = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 36px;
  padding-inline: 16px;
  gap: 16px;

  @media screen and (max-width: ${breakpointScreenEnum.MOBILE}px) {
    flex-direction: row;
    justify-content: center;
    margin: 0;
    padding: 0;
  }
`;
