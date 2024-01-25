"use client";
import React, { useEffect, useRef } from "react";
import { ITextProps, fontWeightBold } from "../Text";
import { poppins } from "@app/fonts";
import Typed from "typed.js";

interface ITextTypingProps extends ITextProps {
  children: string[];
  typingConfig: object;
}

export const TextTyping = ({
  children,
  typingConfig,
  bold,
  capsLock,
  color,
  size,
}: ITextTypingProps) => {
  const typingRolesRef = useRef(null);

  const stylesProps: React.CSSProperties = {
    fontFamily: poppins.style.fontFamily,
    fontSize: size ? `${size / 16}rem` : "1rem",
    color: color,
    fontWeight: bold ? fontWeightBold[bold] : 200,
    textTransform: capsLock ? "uppercase" : "none",
  };

  useEffect(() => {
    const typed = new Typed(typingRolesRef.current, {
      ...typingConfig,
      strings: children,
    });
    return () => {
      typed.destroy();
    };
  }, [children, typingConfig]);

  return (
    <div>
      <span ref={typingRolesRef} style={stylesProps}></span>
    </div>
  );
};
