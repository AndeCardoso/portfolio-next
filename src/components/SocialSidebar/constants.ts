import { TIconNames } from "../base/Icon";

export interface ISocialButtons {
  icon: TIconNames;
  link: string;
}

export const socialButtons: ISocialButtons[] = [
  {
    icon: "github",
    link: "https://github.com/AndeCardoso",
  },
  {
    icon: "linkedin",
    link: "https://www.linkedin.com/in/andersoncardoso-dev/",
  },
  {
    icon: "instagram",
    link: "https://instagram.com/andecardoso.dev",
  },
];
