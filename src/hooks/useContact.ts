import { HttpStatusCode } from "@app/@types/status";
import { removeSlash } from "@utils/removeSlash";
import { usePathname } from "next/navigation";
import { TLocaleTypes, getDictionary } from "@app/[lang]/dictionaries";
import toast from "react-hot-toast";
import * as yup from "yup";

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
  const pathname = usePathname();
  const dict = getDictionary(removeSlash(pathname) as TLocaleTypes);

  const contactFormSchema = yup.object().shape({
    name: yup
      .string()
      .required(dict.MAIN.CONTACT_ME.FORM.NAME.REQUIRED)
      .min(3, dict.MAIN.CONTACT_ME.FORM.NAME.MIN)
      .max(144, dict.MAIN.CONTACT_ME.FORM.NAME.MAX),

    email: yup
      .string()
      .required(dict.MAIN.CONTACT_ME.FORM.EMAIL.REQUIRED)
      .email(dict.MAIN.CONTACT_ME.FORM.EMAIL.TYPE)
      .max(144, dict.MAIN.CONTACT_ME.FORM.EMAIL.MAX),

    message: yup
      .string()
      .required(dict.MAIN.CONTACT_ME.FORM.MESSAGE.REQUIRED)
      .min(64, dict.MAIN.CONTACT_ME.FORM.MESSAGE.MIN),
  });

  const onSubmitForm = async (data: IContactForm) => {
    try {
      const response = await fetch(`/api/contact`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
      });

      if (response.status === HttpStatusCode.ok) {
        toast.success(dict.MAIN.CONTACT_ME.ALERTS.SUCCESS);
        return;
      }

      toast.error(dict.MAIN.CONTACT_ME.ALERTS.WARNING);
    } catch (error) {
      toast.error(dict.MAIN.CONTACT_ME.ALERTS.ERROR);
    }
  };

  return {
    onSubmitForm,
    contactFormSchema,
  };
};
