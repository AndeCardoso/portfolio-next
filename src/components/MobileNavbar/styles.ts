import styled from "styled-components";
import { breakpointScreenEnum } from "@src/constants/breakpoints";
import { colors } from "@src/global/colors";

interface IBurguerButtonProps {
  $isOpen: boolean;
}

export const Container = styled.nav<IBurguerButtonProps>`
  position: fixed;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  backdrop-filter: blur(5px);
  background-color: ${colors.HEADER_BACKGROUND_OPACITY};
  text-align: left;
  padding: 50px;
  padding-top: 150px;
  top: 0;
  right: 0;
  transform: ${({ $isOpen }) =>
    $isOpen ? "translateX(0)" : "translateX(+100%)"};
  transition: all ease-in-out 0.6s;
  z-index: -15;
  gap: 32px;

  @media screen and (min-width: ${breakpointScreenEnum.MOBILE + 1}px) {
    display: none;
  }
`;

export const BurguerButton = styled.div<IBurguerButtonProps>`
  position: relative;
  right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  border: none;
  cursor: pointer;
  z-index: 10;
  transition: all ease-in-out 0.5s;
  background-color: ${({ $isOpen }) =>
    $isOpen ? "transparent" : colors.HEADER_BACKGROUND_OPACITY};
  padding: 24px;
  border-radius: 50px;

  &:focus {
    outline: none;
  }

  div {
    width: 30px;
    height: 3px;
    background-color: ${colors.WHITE};
    border-radius: 5px;
    position: relative;
    transform-origin: 0;
    transition: all ease-in-out 0.5s;
  }

  div:nth-child(1) {
    transform: ${({ $isOpen }) => ($isOpen ? "rotate(45deg)" : "rotate(0)")};
  }

  div:nth-child(2) {
    opacity: ${({ $isOpen }) => ($isOpen ? 0 : 1)};
    transform: ${({ $isOpen }) =>
      $isOpen ? "translateX(-20px)" : "translateX(0)"};
  }

  div:nth-child(3) {
    transform: ${({ $isOpen }) => ($isOpen ? "rotate(-45deg)" : "rotate(0)")};
  }

  @media screen and (min-width: ${breakpointScreenEnum.MOBILE + 1}px) {
    display: none;
  }
`;

export const ResumeButtonContainer = styled.div`
  margin-top: 164px;
`;
