import React from "react";
import { Text } from "@components/base/Text";
import { AttributesTable } from "./components/AttributesTable";
import { Container } from "./styles";
import { IInfoList } from "@app/@types/infos";

interface IAboutProps {
  text: string;
  attributes: IInfoList;
}

export const About = ({ text, attributes }: IAboutProps) => {
  return (
    <Container>
      <Text>{text}</Text>
      <AttributesTable data={attributes} />
    </Container>
  );
};
