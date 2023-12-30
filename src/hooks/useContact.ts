import toast from "react-hot-toast";
import { Resend } from "resend";
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
  const onSubmitForm = async (data: IContactForm) => {
    try {
      const resend = new Resend(`${process.env.NEXT_PUBLIC_RESEND_API_KEY}`);

      const { data: response, error } = await resend.emails.send({
        from: data.email,
        to: "andersoncardoso.dev@gmail.com",
        subject: `Contact from ${data.name}`,
        html: data.message,
      });

      if (error) {
        toast.error("Something has gone wrong!");
      }

      if (response) {
        toast.error("Message sent");
      }
    } catch (error) {
      toast.error("Something has gone wrong!");
    }
  };

  return {
    onSubmitForm,
  };
};
