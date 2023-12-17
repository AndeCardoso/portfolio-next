import React from "react";
import { Text } from "@/components/base/Text";
import { AttributesTable } from "./components/AttributesTable";
import { Container } from "./styles";

interface IAboutProps {
  text: string;
  attributes: Object;
}

export const About = ({ text, attributes }: IAboutProps) => {
  return (
    <Container>
      <Text>{text}</Text>
      <AttributesTable data={attributes} />
    </Container>
  );
};
