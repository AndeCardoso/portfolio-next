import React from "react";
import { Container, Wrapper } from "./styles";
import { Button } from "../base/Button";
import { ISocialButtons } from "./constants";

interface ISocialSidebarProps {
  socialList: ISocialButtons[];
}

export const SocialSidebar = ({ socialList }: ISocialSidebarProps) => {
  return (
    <Container>
      <Wrapper>
        {socialList.map((item, index) => (
          <Button
            key={`${index}-${item.icon}`}
            iconName={item.icon}
            iconSize={24}
            hRef={item.link}
            target="_blank"
            link
          />
        ))}
      </Wrapper>
    </Container>
  );
};
