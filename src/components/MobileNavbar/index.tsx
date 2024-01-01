import { ReactNode, useState } from "react";
import { BurguerButton, Container, ResumeButtonContainer } from "./styles";
import { ISectionButton } from "../Navbar";
import { HeaderButton } from "../Navbar/styles";

interface IMobileNavbarProps {
  sectionButtons: ISectionButton[];
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
        {sectionButtons.map((button) => (
          <HeaderButton
            key={`${button.text}`}
            hRef={button.link}
            bold="heavy"
            size={14}
            link
          >
            {button.text}
          </HeaderButton>
        ))}
        {resumeButton ? (
          <ResumeButtonContainer>{resumeButton}</ResumeButtonContainer>
        ) : null}
      </Container>
    </>
  );
};
