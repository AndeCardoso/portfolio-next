import React, { ReactNode, useEffect, useRef } from "react";
import { Container, GroupButton } from "./styles";
import { Text } from "@/components/base/Text";
import { Button } from "@/components/base/Button";
import { BubbleBanner } from "./components/bubbleBanner";
import { typingRolesConfig } from "./constants/typingRolesConfig";
import { ChevronDown, ChevronRight } from "styled-icons/evaicons-solid";
import { TextTyping } from "@/components/base/TextTyping";
import { colors } from "@/global/colors";

interface IHeaderProps {
  name: string;
  roles: string[];
  bio: string;
}

export const Header = ({ name, roles, bio }: IHeaderProps) => {
  const firstName = name.split(" ")[0];
  const lastName = name.split(" ")[1];

  return (
    <Container>
      <BubbleBanner>
        {firstName}
        <br />
        {lastName}
      </BubbleBanner>
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
        <Button icon={<ChevronRight size={28} />} link onClick="#contact">
          Contact me
        </Button>
        <Button icon={<ChevronDown size={28} />} link onClick="#about" />
      </GroupButton>
    </Container>
  );
};
