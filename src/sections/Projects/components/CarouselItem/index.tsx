import Image from "next/image";
import { Container, DescriptionText, PeriodText, Top } from "./styles";
import { colors } from "@global/colors";
import { Button } from "@src/components/base/Button";
import { IProjectData } from "../..";

interface IProjectItemProps {
  data: IProjectData;
}

export const ProjectItem = ({
  data: { TITLE, DESCRIPTION, URL, PERIOD, BANNER },
}: IProjectItemProps) => {
  return (
    <Container>
      <Top>
        <PeriodText capsLock bold="medium" size={10} color={colors.PRIMARY}>
          {PERIOD}
        </PeriodText>
        <Button hRef={URL} target="_blank" link bold="heavy" size={34}>
          {TITLE}
        </Button>
      </Top>
      <DescriptionText size={14}>{DESCRIPTION}</DescriptionText>
      <Image
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        alt={`${TITLE} banner image`}
        src={BANNER}
      />
    </Container>
  );
};
