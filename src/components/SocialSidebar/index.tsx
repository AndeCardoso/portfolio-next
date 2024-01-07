import React from "react";
import { Container, Wrapper } from "./styles";
import { Button } from "../base/Button";

interface ISocialSidebarProps {
  socialList: any[];
}

export const SocialSidebar = ({ socialList }: ISocialSidebarProps) => {
  return (
    <Container>
      <Wrapper>
        {socialList.map((item, index) => (
          <Button
            key={`${index}`}
            icon={item.icon}
            hRef={item.link}
            target="_blank"
            link
          />
        ))}
      </Wrapper>
    </Container>
  );
};
