import React, { ReactNode } from "react";
import { CarouselButtons, Container } from "./styles";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Button } from "../base/Button";
import { carouselBreakpoints } from "./breakpoints";

type TCarouselProps = {
  children: ReactNode;
  itemsShowed?: number;
};

export const CarouselSection = ({ children, itemsShowed }: TCarouselProps) => {
  const renderItemsPerPage = () => {
    let newBreakpoints = structuredClone(carouselBreakpoints);
    if (itemsShowed && itemsShowed > 0) {
      newBreakpoints = {
        ...newBreakpoints,
        desktop: { ...newBreakpoints.desktop, items: itemsShowed },
        superLargeDesktop: {
          ...newBreakpoints.superLargeDesktop,
          items: itemsShowed,
        },
        tablet: { ...newBreakpoints.tablet, items: itemsShowed },
        tabletLarge: { ...newBreakpoints.tabletLarge, items: itemsShowed },
      };
    }

    return newBreakpoints;
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
        <Button iconName="chevron-left" iconSize={28} onClick={previous} />
        <Button iconName="chevron-right" iconSize={28} onClick={next} />
      </CarouselButtons>
    );
  };

  return (
    <Container>
      <Carousel
        responsive={renderItemsPerPage()}
        arrows={false}
        ssr
        renderButtonGroupOutside
        infinite
        transitionDuration={500}
        partialVisbile={false}
        itemClass="carousel-item"
        containerClass="carousel-container"
        customButtonGroup={
          <ButtonGroup
            next={function (): void {}}
            previous={function (): void {}}
          />
        }
      >
        {children}
      </Carousel>
    </Container>
  );
};
