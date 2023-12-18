import React from "react";
import { Container } from "./styles";
import { InfoContact } from "./infos";
import { ContactForm } from "./form";

interface IContactProps {
  infoList: Object;
}

export const Contact = ({ infoList }: IContactProps) => {
  return (
    <Container>
      <ContactForm />
      <InfoContact infoList={infoList} />
    </Container>
  );
};
