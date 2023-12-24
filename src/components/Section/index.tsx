import React, { ReactNode, useRef } from "react";
import { Container, Wrapper } from "./styles";
import { Text } from "../base/Text";
import { colors } from "@src/global/colors";
import { breakpointScreenEnum } from "@src/constants/breakpoints";

type TSectionProps = {
  title: string;
  description: string;
  children: ReactNode;
  linked?: string;
};

export const Section = ({
  title,
  description,
  children,
  linked,
}: TSectionProps) => {
  const windowSize = useRef(window.innerWidth);
  const isMobile = windowSize.current <= breakpointScreenEnum.MOBILE;

  return (
    <Container id={linked}>
      <Text bold="heavy" size={isMobile ? 38 : 55}>
        {title}
      </Text>
      <Text bold="medium" size={14} capsLock color={colors.PRIMARY}>
        {description}
      </Text>
      <Wrapper>{children}</Wrapper>
    </Container>
  );
};
