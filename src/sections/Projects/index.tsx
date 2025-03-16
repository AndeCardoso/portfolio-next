import React from "react";
import { CarouselSection } from "@components/Carousel";
import { ProjectItem } from "./components/CarouselItem";

interface IReviewsProps {
  projectList: IProjectData[];
}

export interface IProjectData {
  TITLE: string;
  DESCRIPTION: string;
  URL: string;
  PERIOD: string;
  BANNER: string;
}

export const Projects = ({ projectList }: IReviewsProps) => {
  return (
    <CarouselSection itemsShowed={1}>
      {projectList.map((item, index) => (
        <ProjectItem key={`${item.TITLE}-${index}`} data={item} />
      ))}
    </CarouselSection>
  );
};
