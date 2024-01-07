import React from "react";
import { Container } from "./styles";
import { InfoContact } from "./infos";
import { ContactForm } from "./form";

interface IContactProps {
  infoList: Object;
  infoTitle: Object;
}

export const Contact = ({ infoList, infoTitle }: IContactProps) => {
  return (
    <Container>
      <ContactForm />
      <InfoContact infoList={infoList} infoTitle={infoTitle} />
    </Container>
  );
};
