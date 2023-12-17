import Next from "@public/techIconsSVG/next.svg";
import SASS from "@public/techIconsSVG/sass.svg";
import React from "@public/techIconsSVG/react.svg";
import Typescript from "@public/techIconsSVG/typescript.svg";
import StyledComponent from "@public/techIconsSVG/styled-component.svg";
import { StyledSVG } from "./styles";

interface ISvgTechIconProps {
  techIcon: TTechIconTypes;
  size: number;
}

export type TTechIconTypes = "next" | "react" | "typescript";

export const SVG = ({ techIcon, size }: ISvgTechIconProps) => {
  const icons = {
    next: Next,
    sass: SASS,
    react: React,
    typescript: Typescript,
    "styled-component": StyledComponent,
  };

  return (
    <StyledSVG
      src={icons[techIcon].src}
      width={size}
      height={size}
      alt={`icon ${techIcon}`}
    />
  );
};
