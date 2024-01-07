import { en, pt } from "@public/locales";

export type TLocaleTypes = "en" | "pt";

const dictionaries = {
  en,
  pt,
};

export const getDictionary = (locale: TLocaleTypes) => dictionaries[locale];
