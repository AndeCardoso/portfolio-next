import * as yup from "yup";

export const contactFormSchema = yup.object().shape({
  name: yup
    .string()
    .required("Who's knocking?")
    .min(3, "Why so short? Don't be shy...")
    .max(144, "Well that's a little so much longer, take it easy..."),

  email: yup
    .string()
    .required("C'mon! How could I answer you??")
    .email("Are you sure about that address?")
    .max(144, "Well that's a little so much longer, take it easy..."),

  message: yup
    .string()
    .required("Let's talk! Tell me something about you want...")
    .min(144, "C'mon! Speak more, I'd love hear more about it!!"),
});
