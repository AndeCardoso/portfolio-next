import React, { useState } from "react";

export interface IContactForm {
  name: string;
  email: string;
  message: string;
}

export const defaultContactForm = {
  name: "",
  email: "",
  message: "",
};

export const useContact = () => {
  const onSubmitForm = (data: IContactForm) => {
    console.log("teste", data);
  };

  return {
    onSubmitForm,
  };
};
