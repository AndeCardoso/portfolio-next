import styled from "styled-components";
import { breakpointScreenEnum } from "@src/constants/breakpoints";

export const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: ${breakpointScreenEnum.MOBILE}px) {
    flex-direction: column;
  }
`;

export const Container = styled.main`
  position: relative;
  display: flex;
  margin-left: 45%;
  width: 100%;

  @media screen and (max-width: ${breakpointScreenEnum.MOBILE}px) {
    position: sticky;
    flex-direction: column;
    margin: 0;
    margin-left: none;
  }
`;
