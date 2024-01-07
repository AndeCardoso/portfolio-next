import React from "react";
import { IReviewsData } from "../..";
import {
  Author,
  Container,
  Quotation,
  QuoteContainer,
  QuoteText,
} from "./styles";
import { Text } from "@components/base/Text";
import { colors } from "@global/colors";
import { Avatar } from "@components/base/Avatar";

interface IReviewsItemProps {
  data: IReviewsData;
}

export const ReviewItem = ({
  data: { avatar, name, role, quote },
}: IReviewsItemProps) => {
  return (
    <Container>
      <Author>
        <Avatar imageURL={avatar} size={80} />
        <div>
          <Text bold="heavy" size={20}>
            {name}
          </Text>
          <Text bold="medium" size={12} color={colors.PRIMARY} capsLock>
            {role}
          </Text>
        </div>
      </Author>
      <QuoteContainer>
        <Quotation bold="heavy" size={48} color={colors.PRIMARY}>
          &quot;
        </Quotation>
        <QuoteText>{quote}</QuoteText>
      </QuoteContainer>
    </Container>
  );
};
