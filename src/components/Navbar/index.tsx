import React from "react";
import {
  BrandName,
  Container,
  DownloadButton,
  HeaderButton,
  WrapperBrand,
  WrapperButtons,
} from "./styles";
import { Text } from "../base/Text";
import { Download } from "styled-icons/evaicons-solid";

import Image, { StaticImageData } from "next/image";

interface INavbarProps {
  brandName: string;
  brandImage: StaticImageData;
  sectionsButton: ISectionButton[];
}

interface ISectionButton {
  text: string;
  link: string;
}

export const Navbar = ({
  brandName,
  brandImage,
  sectionsButton,
}: INavbarProps) => {
  return (
    <Container>
      <WrapperBrand>
        <Image alt="Brand image" src={brandImage} width={50} height={50} />
        <BrandName bold="medium" size={22}>
          {brandName}
        </BrandName>
      </WrapperBrand>
      <WrapperButtons>
        {sectionsButton.map((btn, id) => (
          <HeaderButton
            key={`${btn.text}-${id}`}
            onClick={btn.link}
            bold="heavy"
            size={14}
            link
          >
            {btn.text}
          </HeaderButton>
        ))}
        <DownloadButton
          onClick="https://andersoncardoso.dev.br/pdf/AndersonCardoso-Curriculo.pdf"
          icon={<Download size={18} style={{ marginLeft: 8 }} />}
          size={14}
          bold="heavy"
          link
        >
          Resumé
        </DownloadButton>
      </WrapperButtons>
    </Container>
  );
};
