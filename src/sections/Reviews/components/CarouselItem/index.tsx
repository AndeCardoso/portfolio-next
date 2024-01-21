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
  data: { AVATAR, NAME, ROLE, QUOTE },
}: IReviewsItemProps) => {
  return (
    <Container>
      <Author>
        <Avatar imageURL={AVATAR} size={80} />
        <div>
          <Text bold="heavy" size={20}>
            {NAME}
          </Text>
          <Text bold="medium" size={12} color={colors.PRIMARY} capsLock>
            {ROLE}
          </Text>
        </div>
      </Author>
      <QuoteContainer>
        <Quotation bold="heavy" size={48} color={colors.PRIMARY}>
          &quot;
        </Quotation>
        <QuoteText>{QUOTE}</QuoteText>
      </QuoteContainer>
    </Container>
  );
};
