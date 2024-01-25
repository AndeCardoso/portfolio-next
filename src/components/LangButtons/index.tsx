"use client";
import React, { useState } from "react";
import { Container, Divider, StyledButton } from "./styles";
import { usePathname, useRouter } from "next/navigation";
import { removeSlash } from "@utils/removeSlash";
import { TLocaleTypes } from "@app/[lang]/dictionaries";

export const LangButtons = () => {
  const pathname = usePathname();
  const router = useRouter();

  const [selected, setSelected] = useState<TLocaleTypes>(
    removeSlash(pathname) as TLocaleTypes
  );

  const handleClick = (lang: TLocaleTypes) => {
    setSelected(lang);
    router.replace(`/${lang}`);
  };
  return (
    <Container>
      <StyledButton
        $selected={selected === "en"}
        onClick={() => handleClick("en")}
      >
        EN
      </StyledButton>
      <Divider />
      <StyledButton
        $selected={selected === "pt"}
        onClick={() => handleClick("pt")}
      >
        PT
      </StyledButton>
    </Container>
  );
};
