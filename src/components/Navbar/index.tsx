import {
  BrandName,
  Container,
  DownloadButton,
  HeaderButton,
  WrapperBrand,
  WrapperButtons,
} from "./styles";
import { Download } from "styled-icons/evaicons-solid";
import Image, { StaticImageData } from "next/image";
import { MobileNavbar } from "../MobileNavbar";

interface INavbarProps {
  brandName: string;
  brandImage: StaticImageData;
  sectionButtons: ISectionButton[];
}

export interface ISectionButton {
  text: string;
  link: string;
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
        sectionButtons={sectionButtons}
        resumeButton={
          <HeaderButton
            hRef={"/pdf/AndersonCardoso-Resume.pdf"}
            bold="heavy"
            icon={<Download size={18} style={{ marginLeft: 8 }} />}
            size={14}
            link
            target="_blank"
          >
            Resumé
          </HeaderButton>
        }
      />
      <WrapperButtons>
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
        <DownloadButton
          hRef="/pdf/AndersonCardoso-Resume.pdf"
          icon={<Download size={18} style={{ marginLeft: 8 }} />}
          size={14}
          bold="heavy"
          link
          target="_blank"
        >
          Resumé
        </DownloadButton>
      </WrapperButtons>
    </Container>
  );
};
