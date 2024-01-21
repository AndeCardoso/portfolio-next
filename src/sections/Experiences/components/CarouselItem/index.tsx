import { IExperienceData } from "../..";
import { Container, DescriptionText, PeriodText, Top } from "./styles";
import { Text } from "@components/base/Text";
import { colors } from "@global/colors";

interface IExperienceItemProps {
  data: IExperienceData;
}

export const ExperienceItem = ({
  data: { COMPANY, PERIOD, DESCRIPTION },
}: IExperienceItemProps) => {
  return (
    <Container>
      <Top>
        <PeriodText capsLock bold="medium" size={10} color={colors.PRIMARY}>
          {PERIOD}
        </PeriodText>
        <Text size={34} bold="heavy">
          {COMPANY}
        </Text>
      </Top>
      <DescriptionText>{DESCRIPTION}</DescriptionText>
    </Container>
  );
};
