import React, { HTMLAttributeAnchorTarget, ReactNode } from "react";
import { StyledButton, StyledLink, StyledText } from "./styles";
import { ITextProps } from "../Text";
import { Icon, TIconNames } from "../Icon";

interface IButtonProps extends Omit<ITextProps, "children"> {
  children?: string | ReactNode;
  iconName?: TIconNames;
  iconSize?: number;
  onClick?: () => void;
  hRef?: string;
  link?: boolean;
  target?: HTMLAttributeAnchorTarget;
}

export const Button = ({
  children,
  onClick,
  hRef,
  iconName,
  iconSize = 20,
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
      {iconName ? <Icon name={iconName} size={iconSize} /> : null}
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
      {iconName ? <Icon name={iconName} size={iconSize} /> : null}
    </StyledButton>
  );
};
