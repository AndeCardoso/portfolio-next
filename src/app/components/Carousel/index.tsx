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
      items: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const ButtonGroup = ({ next, previous }) => {
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
        ssr
        arrows={false}
        renderButtonGroupOutside
        customButtonGroup={<ButtonGroup />}
        deviceType="desktop"
        transitionDuration={500}
        partialVisbile={false}
        containerClass="carousel-container"
        itemClass="react-multi-carousel-track"
        className="carousel-section"
      >
        {children}
      </Carousel>
    </Container>
  );
};
