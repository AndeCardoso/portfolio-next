import React from "react";
import { Container, Header, Key, List, Row, Value } from "./styles";
import { Text } from "@components/base/Text";
import { colors } from "@global/colors";

interface IInfoContactProps {
  infoList: Object;
  infoTitle: Object;
}

export const InfoContact = ({ infoList, infoTitle }: IInfoContactProps) => {
  return (
    <Container>
      <Header>
        <Text size={24} bold="heavy">
          {infoTitle.NAME}
        </Text>
        <Text size={14} bold="medium" color={colors.PRIMARY} capsLock>
          {infoTitle.POSITION}
        </Text>
      </Header>
      <List>
        {Object.entries(infoList).map((item) => (
          <Row key={`${item[0]}`}>
            <Key size={14} bold="medium" color={colors.PRIMARY} capsLock>
              {item[1].LABEL}:
            </Key>
            <Value size={14} bold="medium">
              {item[1].INFO}
            </Value>
          </Row>
        ))}
      </List>
    </Container>
  );
};
