import React from "react";
import { IReviewsData } from "../..";
import { Author, Container, Description, Quotation, QuoteText } from "./styles";
import { Text } from "@components/base/Text";
import { colors } from "@src/global/colors";
import Image from "next/image";

interface IReviewsItemProps {
  data: IReviewsData;
}

export const ReviewItem = ({
  data: { name, role, quote },
}: IReviewsItemProps) => {
  return (
    <Container>
      <Author>
        <Image
          width={80}
          height={80}
          alt="profile-mock"
          style={{
            objectFit: "cover",
            objectPosition: "center",
            borderRadius: 50,
          }}
          src={
            "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/PostImagem/22811/5-fatores-que-influenciam-para-o-seu-perfil-no-linkedin_abradilan-20-anos-62.jpg"
          }
        />
        <div>
          <Text bold="heavy" size={20}>
            {name}
          </Text>
          <Text bold="medium" size={12} color={colors.PRIMARY} capsLock>
            {role}
          </Text>
        </div>
      </Author>
      <Description>
        <Quotation bold="heavy" size={48} color={colors.PRIMARY}>
          &quot;
        </Quotation>
        <QuoteText>{quote}</QuoteText>
      </Description>
    </Container>
  );
};
