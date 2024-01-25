import React from "react";
import { Container } from "./styles";
import { InfoContact } from "./infos";
import { ContactForm } from "./form";

interface IContactProps {
  infoList: IInfoList;
  infoTitle: IInfoTitle;
}

export interface IInfoTitle {
  NAME: string;
  POSITION: string;
}

export interface IInfoList {
  AGE: {
    LABEL: string;
    INFO: string | undefined;
  };
  RESIDENCE: {
    LABEL: string;
    INFO: string;
  };
}

export const Contact = ({ infoList, infoTitle }: IContactProps) => {
  return (
    <Container>
      <ContactForm />
      <InfoContact infoList={infoList} infoTitle={infoTitle} />
    </Container>
  );
};
