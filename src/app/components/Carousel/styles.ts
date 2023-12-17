import { colors } from "@/global/colors";
import styled from "styled-components";

export const Container = styled.section`
  /* width: 750px;
  display: flex;
  justify-content: left;
  overflow-x: scroll;
  overflow: auto;
  padding-bottom: 32px;
  gap: 32px;

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${colors.PRIMARY};
    border-radius: 50px;
  } */

  display: flex;
  flex-direction: column-reverse;

  .carousel-section {
    /* min-width: 200px; */
    max-width: 820px;
    /* background-color: grey; */
  }
`;

export const CarouselButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  margin-bottom: 32px;
`;
