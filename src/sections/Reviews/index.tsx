import React from "react";
import { CarouselSection } from "@components/Carousel";
import { ReviewItem } from "./components/CarouselItem";

interface IReviewsProps {
  reviewsList: IReviewsData[];
}

export interface IReviewsData {
  name: string;
  role: string;
  quote: string;
}

export const Reviews = ({ reviewsList }: IReviewsProps) => {
  return (
    <CarouselSection>
      {reviewsList.map((item, index) => (
        <ReviewItem key={`${item.name}-${index}`} data={item} />
      ))}
    </CarouselSection>
  );
};
