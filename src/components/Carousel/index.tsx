import React, { ReactNode } from "react";
import { CarouselButtons, Container } from "./styles";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Button } from "../base/Button";
import { ChevronLeft, ChevronRight } from "styled-icons/evaicons-solid";

type TCarouselProps = {
  children: ReactNode;
};

export const CarouselSection = ({ children }: TCarouselProps) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1665 },
      items: 2,
    },
    tabletLarge: {
      breakpoint: { max: 1665, min: 1350 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1350, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };

  const ButtonGroup = ({
    next,
    previous,
  }: {
    next: () => void;
    previous: () => void;
  }) => {
    return (
      <CarouselButtons>
        <Button icon={<ChevronLeft size={28} />} onClick={previous} />
        <Button icon={<ChevronRight size={28} />} onClick={next} />
      </CarouselButtons>
    );
  };

  return (
    <Container>
      <Carousel
        responsive={responsive}
        arrows={false}
        ssr
        renderButtonGroupOutside
        customButtonGroup={
          <ButtonGroup
            next={function (): void {}}
            previous={function (): void {}}
          />
        }
        transitionDuration={500}
        partialVisbile={false}
        itemClass="carousel-item"
        containerClass="carousel-container"
      >
        {children}
      </Carousel>
    </Container>
  );
};
