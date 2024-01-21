import React from "react";
import { Text } from "@components/base/Text";
import { Container, Wrapper } from "./styles";
import { SVG } from "@components/base/Svg";
import { colors } from "@global/colors";
import { ITechSvgList } from "./constants";

interface ITechnologiesProps {
  svgList: ITechSvgList[];
}

export const Technologies = ({ svgList }: ITechnologiesProps) => {
  return (
    <Container>
      {svgList.map((item, index) => {
        return (
          <Wrapper key={`${item.name}-${index}`}>
            <SVG techSvg={item.svg} size={120} />
            <Text bold="medium" color={colors.PRIMARY}>
              {item.name}
            </Text>
          </Wrapper>
        );
      })}
    </Container>
  );
};
