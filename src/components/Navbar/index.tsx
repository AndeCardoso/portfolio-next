import {
  BrandName,
  Container,
  DownloadButton,
  HeaderButton,
  LangContainer,
  WrapperBrand,
  WrapperButtons,
} from "./styles";
import { Download } from "styled-icons/evaicons-solid";
import Image from "next/image";
import { MobileNavbar } from "../MobileNavbar";
import { LangButtons } from "../LangButtons";

interface INavbarProps {
  brandName: string;
  brandImage: string;
  sectionButtons: Object;
}

export const Navbar = ({
  brandName,
  brandImage,
  sectionButtons,
}: INavbarProps) => {
  return (
    <Container>
      <WrapperBrand onClick={() => window.scrollTo(0, 0)}>
        <Image alt="Brand image" src={brandImage} width={50} height={50} />
        <BrandName bold="medium" size={22}>
          {brandName}
        </BrandName>
      </WrapperBrand>
      <MobileNavbar
        sectionButtons={sectionButtons.SECTION_BUTTONS}
        resumeButton={
          <HeaderButton
            hRef={"/pdf/AndersonCardoso-Resume.pdf"}
            bold="heavy"
            icon={<Download size={18} style={{ marginLeft: 8 }} />}
            size={14}
            link
            target="_blank"
          >
            {sectionButtons.RESUME}
          </HeaderButton>
        }
      />
      <WrapperButtons>
        {Object.entries(sectionButtons.SECTION_BUTTONS).map((button) => (
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
        <LangContainer>
          <LangButtons />
        </LangContainer>
        <DownloadButton
          hRef="/pdf/AndersonCardoso-Resume.pdf"
          icon={<Download size={18} style={{ marginLeft: 8 }} />}
          size={14}
          bold="heavy"
          link
          target="_blank"
        >
          {sectionButtons.RESUME}
        </DownloadButton>
      </WrapperButtons>
    </Container>
  );
};
