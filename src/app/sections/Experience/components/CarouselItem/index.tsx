import React from "react";
import { IExperienceData } from "../..";
import { Container, PeriodText, Top } from "./styles";
import { Text } from "@/components/base/Text";
import { colors } from "@/global/colors";

interface IExperienceItemProps {
  data: IExperienceData;
}

export const ExperienceItem = ({
  data: { company, period, description },
}: IExperienceItemProps) => {
  return (
    <Container>
      <Top>
        <PeriodText capsLock bold="medium" size={10} color={colors.PRIMARY}>
          {period}
        </PeriodText>
        <Text size={34} bold="heavy">
          {company}
        </Text>
      </Top>
      <Text>{description}</Text>
    </Container>
  );
};
