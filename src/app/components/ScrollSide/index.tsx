import React, { ReactNode } from "react";
import { Container } from "./styles";

type TScrollSideProps = {
  children: ReactNode;
};

export const ScrollSide = ({ children }: TScrollSideProps) => {
  return <Container>{children}</Container>;
};
