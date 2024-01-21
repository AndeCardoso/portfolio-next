import React from "react";
import { Container, Wrapper } from "./styles";
import { Button } from "../base/Button";
import { Icon } from "../base/Icon";
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
            icon={<Icon name={item.icon} size={24} />}
            hRef={item.link}
            target="_blank"
            link
          />
        ))}
      </Wrapper>
    </Container>
  );
};
