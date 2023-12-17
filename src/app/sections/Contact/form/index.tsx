import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/base/Button";
import {
  IContactForm,
  defaultContactForm,
  useContact,
} from "@/hooks/useContact";
import { ChevronRight } from "styled-icons/evaicons-solid";
import { Container } from "./styles";
import { ControlledInput } from "@/components/base/ControlledInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactFormSchema } from "./schema";

export const ContactForm = () => {
  const { onSubmitForm } = useContact();
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
        label="Name"
        placeholder="Write your full name"
        error={errors.name?.message}
      />
      <ControlledInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="Write your best e-mail"
        error={errors.email?.message}
      />
      <ControlledInput
        control={control}
        name="message"
        label="Message"
        placeholder="To write"
        error={errors.message?.message}
        minRows={6}
        textArea
      />
      <Button
        icon={<ChevronRight size={28} />}
        onClick={handleSubmit(onSubmitForm)}
      >
        Send message
      </Button>
    </Container>
  );
};
