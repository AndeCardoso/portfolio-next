import styled from "styled-components";
import { breakpointScreenEnum } from "@src/constants/breakpoints";

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  margin-top: -158px;

  .carousel-container {
    max-width: 1120px;

    @media screen and (max-width: 3000px) {
      max-width: 920px;
    }
    @media screen and (max-width: 2500px) {
      max-width: 820px;
    }
    @media screen and (max-width: 1905px) {
      max-width: 720px;
    }
    @media screen and (max-width: 1720px) {
      max-width: 700px;
    }
    @media screen and (max-width: 1685px) {
      max-width: 690px;
    }
    @media screen and (max-width: 1665px) {
      max-width: 520px;
    }
    @media screen and (max-width: 1350px) {
      max-width: 1250px;
    }
    @media screen and (max-width: 768px) {
      max-width: 750px;
    }
  }

  @media screen and (max-width: ${breakpointScreenEnum.MOBILE}px) {
    margin-top: 0;
  }
`;

export const CarouselButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  margin-bottom: 116px;

  @media screen and (max-width: ${breakpointScreenEnum.MOBILE}px) {
    justify-content: center;
    margin-bottom: 32px;
  }
`;
