import styled from "styled-components";
import { breakpointScreenEnum } from "@src/constants/breakpoints";

export const Container = styled.div`
  height: fit-content;
  display: grid;
  grid-template-rows: repeat(2, 170px);
  grid-auto-flow: column;
  row-gap: 64px;

  @media screen and (max-width: 600px) {
    grid-template-rows: repeat(3, 90px);
    grid-auto-flow: column;
    row-gap: 120px;
  }
`;

export const Wrapper = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;
