"use client";
import React from "react";
import { TextAreaProps } from "@nextui-org/react";
import { StyledTextarea } from "./styles";

export interface ITextAreaProps extends TextAreaProps {
  label: string;
  placeholder: string;
}

export const TextArea = ({ label, placeholder, ...rest }: ITextAreaProps) => {
  return (
    <StyledTextarea
      label={label}
      placeholder={placeholder}
      isMultiline
      {...rest}
    />
  );
};
