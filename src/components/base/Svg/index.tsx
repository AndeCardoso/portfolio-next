import Next from "@public/techIconsSVG/next.svg";
import SASS from "@public/techIconsSVG/sass.svg";
import React from "@public/techIconsSVG/react.svg";
import Typescript from "@public/techIconsSVG/typescript.svg";
import StyledComponent from "@public/techIconsSVG/styled-component.svg";
import { StyledSVG } from "./styles";

interface ITechSvgProps {
  techSvg: TTechSvgTypes;
  size: number;
}

export type TTechSvgTypes =
  | "next"
  | "react"
  | "typescript"
  | "sass"
  | "styled-component";

export const SVG = ({ techSvg, size }: ITechSvgProps) => {
  const svgs = {
    next: Next,
    sass: SASS,
    react: React,
    typescript: Typescript,
    "styled-component": StyledComponent,
  };

  return (
    <StyledSVG
      src={svgs[techSvg].src}
      width={size}
      height={size}
      alt={`${techSvg} image`}
    />
  );
};
