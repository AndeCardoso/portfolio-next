"use client";
import React, { HTMLAttributeAnchorTarget, ReactNode } from "react";
import { StyledButton, StyledLink, StyledText } from "./styles";
import { ITextProps } from "../Text";

interface IButtonProps extends Omit<ITextProps, "children"> {
  children?: string | ReactNode;
  icon?: ReactNode;
  onClick?: () => void;
  hRef?: string;
  link?: boolean;
  target?: HTMLAttributeAnchorTarget;
}

export const Button = ({
  children,
  onClick,
  hRef,
  icon,
  link = false,
  bold = "medium",
  size = 16,
  target,
  ...rest
}: IButtonProps) => {
  return link ? (
    <StyledLink
      {...rest}
      href={hRef ?? ""}
      target={target}
      $onlyIcon={!children}
      type="button"
    >
      {children ? (
        <StyledText size={size} bold={bold} capsLock>
          {children}
        </StyledText>
      ) : null}
      {icon}
    </StyledLink>
  ) : (
    <StyledButton
      {...rest}
      onClick={onClick}
      $onlyIcon={!children}
      type="button"
    >
      {children ? (
        <StyledText size={size} bold={bold} capsLock>
          {children}
        </StyledText>
      ) : null}
      {icon}
    </StyledButton>
  );
};
