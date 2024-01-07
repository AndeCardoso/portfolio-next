import React, { CSSProperties, ReactNode } from "react";
import { Paragraph } from "./styles";

export interface ITextProps {
  children: string | string[] | ReactNode;
  color?: string;
  size?: number;
  bold?: TBoldWeight;
  capsLock?: boolean;
  style?: React.CSSProperties;
}

export type TBoldWeight = "medium" | "heavy";

export const fontWeightBold = {
  medium: 500,
  heavy: 700,
};

export const Text = ({
  children,
  color,
  size,
  bold,
  capsLock,
  ...rest
}: ITextProps) => {
  const stylesProps: CSSProperties = {
    fontSize: size ? `${size / 16}rem` : "1rem",
    color: color,
    fontWeight: bold ? fontWeightBold[bold] : 200,
    textTransform: capsLock ? "uppercase" : "none",
    whiteSpace: "pre-line",
  };

  return (
    <Paragraph style={stylesProps} {...rest}>
      {children}
    </Paragraph>
  );
};
