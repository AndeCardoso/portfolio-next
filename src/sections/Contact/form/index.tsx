"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@components/base/Button";
import {
  IContactForm,
  defaultContactForm,
  useContact,
} from "@hooks/useContact";
import { ControlledInput } from "@components/base/ControlledInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { TLocaleTypes, getDictionary } from "@app/[lang]/dictionaries";
import { removeSlash } from "@utils/removeSlash";
import { usePathname } from "next/navigation";

import { ChevronRight } from "styled-icons/evaicons-solid";

import { Container } from "./styles";

export const ContactForm = () => {
  const pathname = usePathname();
  const dict = getDictionary(removeSlash(pathname) as TLocaleTypes);
  const { onSubmitForm, contactFormSchema } = useContact();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IContactForm>({
    defaultValues: defaultContactForm,
    mode: "onSubmit",
    resolver: yupResolver(contactFormSchema),
  });

  return (
    <Container>
      <ControlledInput
        control={control}
        name="name"
        label={dict.MAIN.CONTACT_ME.FORM.NAME.LABEL}
        placeholder={dict.MAIN.CONTACT_ME.FORM.NAME.PLACEHOLDER}
        error={errors.name?.message}
      />
      <ControlledInput
        control={control}
        name="email"
        label={dict.MAIN.CONTACT_ME.FORM.EMAIL.LABEL}
        placeholder={dict.MAIN.CONTACT_ME.FORM.EMAIL.PLACEHOLDER}
        error={errors.email?.message}
      />
      <ControlledInput
        control={control}
        name="message"
        label={dict.MAIN.CONTACT_ME.FORM.MESSAGE.LABEL}
        placeholder={dict.MAIN.CONTACT_ME.FORM.MESSAGE.PLACEHOLDER}
        error={errors.message?.message}
        minRows={6}
        textArea
      />
      <Button
        icon={<ChevronRight size={28} />}
        onClick={handleSubmit(onSubmitForm)}
      >
        {dict.MAIN.CONTACT_ME.BUTTON}
      </Button>
    </Container>
  );
};
