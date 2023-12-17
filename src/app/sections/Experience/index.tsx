import React from "react";
import { ExperienceItem } from "./components/CarouselItem";
import { CarouselSection } from "@/components/Carousel";

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
