import { TTechSvgTypes } from "@components/base/Svg";

export interface ITechSvgList {
  name: string;
  svg: TTechSvgTypes;
}

export const techSvgList: ITechSvgList[] = [
  {
    name: "React",
    svg: "react",
  },
  {
    name: "TypeScript",
    svg: "typescript",
  },
  {
    name: "Next Js",
    svg: "next",
  },
  {
    name: "React Native",
    svg: "react",
  },
  {
    name: "SASS",
    svg: "sass",
  },
  {
    name: "Styled Component",
    svg: "styled-component",
  },
];
