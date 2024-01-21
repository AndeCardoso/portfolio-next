"use client";
import { ReactNode, useState } from "react";
import { BurguerButton, Container, ResumeButtonContainer } from "./styles";
import { HeaderButton } from "../Navbar/styles";
import { LangButtons } from "@components/LangButtons";

interface IMobileNavbarProps {
  sectionButtons: Object;
  resumeButton?: ReactNode;
}

export const MobileNavbar = ({
  sectionButtons,
  resumeButton,
}: IMobileNavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const humburguerToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <BurguerButton $isOpen={isOpen} onClick={humburguerToggle}>
        <div />
        <div />
        <div />
      </BurguerButton>
      <Container $isOpen={isOpen}>
        {Object.entries(sectionButtons).map((button) => (
          <HeaderButton
            key={`${button[0]}`}
            hRef={`#${button[0].toLocaleLowerCase()}`}
            bold="heavy"
            size={14}
            link
          >
            {button[1]}
          </HeaderButton>
        ))}
        <LangButtons />
        {resumeButton ? (
          <ResumeButtonContainer>{resumeButton}</ResumeButtonContainer>
        ) : null}
      </Container>
    </>
  );
};
