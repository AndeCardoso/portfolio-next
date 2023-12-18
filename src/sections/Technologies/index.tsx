import React, { Fragment, ReactNode } from "react";
import { Text } from "@components/base/Text";
import { Container, Wrapper } from "./styles";
import { SVG, TTechIconTypes } from "@components/base/Svg";
import { colors } from "@src/global/colors";

interface ITechnologiesProps {
  iconsList: ITechIcon[];
}

export interface ITechIcon {
  icon: TTechIconTypes;
  name: string;
}

export const Technologies = ({ iconsList }: ITechnologiesProps) => {
  return (
    <Container>
      {iconsList.map((item, index) => {
        return (
          <Wrapper key={`${item.name}-${index}`}>
            <SVG techIcon={item.icon} size={120} />
            <Text bold="medium" color={colors.PRIMARY}>
              {item.name}
            </Text>
          </Wrapper>
        );
      })}
    </Container>
  );
};
