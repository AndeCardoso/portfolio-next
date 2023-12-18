"use client";
import React, { useEffect, useRef } from "react";
import { ITextProps, fontWeightBold } from "../Text";
import Typed from "typed.js";

interface ITextTypingProps extends ITextProps {
  children: string | string[];
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
    fontFamily: "Poppins",
    fontSize: size || 16,
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
