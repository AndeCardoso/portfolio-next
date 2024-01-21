import React from "react";

import { Download } from "styled-icons/evaicons-solid";
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
} from "styled-icons/evaicons-solid";
import { Instagram, Linkedin, Github } from "styled-icons/boxicons-logos";

export type TIconNames =
  | "download"
  | "chevron-left"
  | "chevron-right"
  | "chevron-down"
  | "instagram"
  | "github"
  | "linkedin";

interface IIconProps {
  name: TIconNames;
  size: number;
}

export const Icon = ({ name, size }: IIconProps) => {
  const icons = {
    download: <Download size={size} />,
    "chevron-left": <ChevronLeft size={size} />,
    "chevron-right": <ChevronRight size={size} />,
    "chevron-down": <ChevronDown size={size} />,
    instagram: <Instagram size={size} />,
    github: <Github size={size} />,
    linkedin: <Linkedin size={size} />,
  };

  return icons[name];
};
