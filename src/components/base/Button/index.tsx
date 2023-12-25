import React, { HTMLAttributeAnchorTarget, ReactNode } from "react";
import { StyledButton, StyledLink, StyledText } from "./styles";
import { ITextProps } from "../Text";

interface IButtonProps extends Omit<ITextProps, "children"> {
  children?: string | ReactNode;
  icon?: ReactNode;
  onClick?: any;
  link?: boolean;
  target?: HTMLAttributeAnchorTarget;
}

export const Button = ({
  children,
  onClick,
  icon,
  link,
  bold = "medium",
  size = 16,
  target,
  ...rest
}: IButtonProps) => {
  return link ? (
    <StyledLink {...rest} href={onClick} target={target} $onlyIcon={!children}>
      {children ? (
        <StyledText size={size} bold={bold} capsLock>
          {children}
        </StyledText>
      ) : null}
      {icon}
    </StyledLink>
  ) : (
    <StyledButton {...rest} onClick={onClick} $onlyIcon={!children}>
      {children ? (
        <StyledText size={size} bold={bold} capsLock>
          {children}
        </StyledText>
      ) : null}
      {icon}
    </StyledButton>
  );
};
