import React, { ReactNode } from "react";
import { Container } from "./styles";

type TBubbleBannerProps = {
  children: ReactNode;
};

export const BubbleBanner = ({ children }: TBubbleBannerProps) => {
  return <Container>{children}</Container>;
};
