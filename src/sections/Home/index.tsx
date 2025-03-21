import React from "react";
import Image from "next/image";
import { Text } from "@components/base/Text";
import { Button } from "@components/base/Button";
import { TextTyping } from "@components/base/TextTyping";
import { BubbleBanner } from "./components/bubbleBanner";
import { typingRolesConfig } from "./constants/typingRolesConfig";
import { colors } from "@global/colors";
import { TLocaleTypes, getDictionary } from "@app/[lang]/dictionaries";
import { removeSlash } from "@utils/removeSlash";
import { usePathname } from "next/navigation";
import { Container, GroupButton, Top } from "./styles";

import Logo from "@public/logo.svg";

interface IHomeSectionProps {
  name: string;
  roles: string[];
  bio: string;
}

export const HomeSection = ({ name, roles, bio }: IHomeSectionProps) => {
  const pathname = usePathname();
  const dict = getDictionary(removeSlash(pathname) as TLocaleTypes);
  return (
    <Container id="home">
      <Top>
        <BubbleBanner>
          <Image alt="Brand image" src={Logo} width={250} unoptimized />
          {name}
        </BubbleBanner>
      </Top>
      <TextTyping
        typingConfig={typingRolesConfig}
        color={colors.PRIMARY}
        bold="medium"
        size={18}
        capsLock
      >
        {roles}
      </TextTyping>
      <Text size={16}>{bio}</Text>
      <GroupButton>
        <Button iconName="chevron-right" iconSize={28} link hRef="#contact">
          {dict.MAIN.ABOUT_ME.BUTTON}
        </Button>
        <Button iconName="chevron-down" iconSize={28} link hRef="#about" />
      </GroupButton>
    </Container>
  );
};
