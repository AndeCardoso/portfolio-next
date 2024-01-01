import React from "react";
import { Container, GroupButton } from "./styles";
import { Text } from "@components/base/Text";
import { Button } from "@components/base/Button";
import { BubbleBanner } from "./components/bubbleBanner";
import { typingRolesConfig } from "./constants/typingRolesConfig";
import { ChevronDown, ChevronRight } from "styled-icons/evaicons-solid";
import { TextTyping } from "@components/base/TextTyping";
import { colors } from "@src/global/colors";

interface IHomeSectionProps {
  name: string;
  roles: string[];
  bio: string;
}

export const HomeSection = ({ name, roles, bio }: IHomeSectionProps) => {
  return (
    <Container>
      <BubbleBanner>{name}</BubbleBanner>
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
        <Button icon={<ChevronRight size={28} />} link hRef="#contact">
          Contact me
        </Button>
        <Button icon={<ChevronDown size={28} />} link hRef="#about" />
      </GroupButton>
    </Container>
  );
};
