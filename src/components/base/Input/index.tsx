"use client";
import React from "react";
import { InputProps } from "@nextui-org/react";
import { StyledInput } from "./styles";

export interface IInputProps extends InputProps {
  label: string;
  placeholder: string;
}

export const Input = ({ label, placeholder, ...rest }: IInputProps) => {
  return <StyledInput label={label} placeholder={placeholder} {...rest} />;
};
