import React from "react";
import { Container, Header, List, Row } from "./styles";
import { Text } from "@components/base/Text";
import { name, position } from "@constants/profileText";
import { colors } from "@src/global/colors";
import Image from "next/image";
import mock from "@public/signature-mock.png";

interface IInfoContactProps {
  infoList: Object;
}

export const InfoContact = ({ infoList }: IInfoContactProps) => {
  return (
    <Container>
      <Header>
        <Text size={24} bold="heavy">
          {name}
        </Text>
        <Text size={14} bold="medium" color={colors.PRIMARY} capsLock>
          {position}
        </Text>
      </Header>
      <List>
        {Object.entries(infoList).map((item, index) => (
          <Row key={`${index}`}>
            <Text size={14} bold="medium" color={colors.PRIMARY} capsLock>
              {item[0]}:
            </Text>
            <Text size={14} bold="medium">
              {item[1]}
            </Text>
          </Row>
        ))}
      </List>
      <Image src={mock} alt="signature" height={80} className="signature" />
    </Container>
  );
};
