import React from "react";
import { CarouselSection } from "@components/Carousel";
import { ReviewItem } from "./components/CarouselItem";

interface IReviewsProps {
  reviewsList: IReviewsData[];
}

export interface IReviewsData {
  AVATAR: string;
  NAME: string;
  ROLE: string;
  QUOTE: string;
}

export const Reviews = ({ reviewsList }: IReviewsProps) => {
  return (
    <CarouselSection>
      {reviewsList.map((item, index) => (
        <ReviewItem key={`${item.NAME}-${index}`} data={item} />
      ))}
    </CarouselSection>
  );
};
