import React, { ReactNode } from "react";
import { Container, Wrapper } from "./styles";
import { Text } from "../base/Text";
import { colors } from "@/global/colors";

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
  return (
    <Container id={linked}>
      <Text bold="heavy" size={55}>
        {title}
      </Text>
      <Text bold="medium" size={14} capsLock color={colors.PRIMARY}>
        {description}
      </Text>
      <Wrapper>{children}</Wrapper>
    </Container>
  );
};
