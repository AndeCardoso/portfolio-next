"use client";
import React, { useState } from "react";
import { Container, StyledButton, StyledImage } from "./styles";
import { usePathname, useRouter } from "next/navigation";
import { removeSlash } from "@utils/removeSlash";
import { TLocaleTypes } from "@src/app/[lang]/dictionaries";

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
        <StyledImage
          src="/flags/en.png"
          alt="England and United States flags"
          width={30}
          height={20}
        />
      </StyledButton>
      <StyledButton
        $selected={selected === "pt"}
        onClick={() => handleClick("pt")}
      >
        <StyledImage
          src="/flags/pt.png"
          alt="Brazil and Portugal flags"
          width={30}
          height={20}
        />
      </StyledButton>
    </Container>
  );
};
