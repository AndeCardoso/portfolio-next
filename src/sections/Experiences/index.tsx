import { CarouselSection } from "@components/Carousel";
import { ExperienceItem } from "./components/CarouselItem";

interface IExperienceProps {
  experiencesList: IExperienceData[];
}

export interface IExperienceData {
  COMPANY: string;
  PERIOD: string;
  DESCRIPTION: string;
}

export const Experience = ({ experiencesList }: IExperienceProps) => {
  return (
    <CarouselSection>
      {experiencesList.map((item, index) => (
        <ExperienceItem key={`${item.COMPANY}-${index}`} data={item} />
      ))}
    </CarouselSection>
  );
};
