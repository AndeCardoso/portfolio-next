import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  margin-top: -158px;

  .carousel-section {
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
      max-width: 620px;
    }
    @media screen and (max-width: 1540px) {
      max-width: 520px;
    }
  }
  .carousel-slider {
    gap: 32px;
  }
`;

export const CarouselButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  margin-bottom: 116px;
`;
