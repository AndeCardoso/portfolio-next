import React from "react";
import { CarouselSection } from "@components/Carousel";
import { ExperienceItem } from "./components/CarouselItem";

interface IExperienceProps {
  experiencesList: IExperienceData[];
}

export interface IExperienceData {
  company: string;
  period: string;
  description: string;
}

export const Experience = ({ experiencesList }: IExperienceProps) => {
  return (
    <CarouselSection>
      {experiencesList.map((item, index) => (
        <ExperienceItem key={`${item.company}-${index}`} data={item} />
      ))}
    </CarouselSection>
  );
};
