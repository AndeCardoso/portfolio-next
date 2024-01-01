import { HttpStatusCode } from "@app/@types/status";
import toast from "react-hot-toast";
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
      const response = await fetch("http://localhost:3000/api/contact", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
      });

      if (response.status === HttpStatusCode.ok) {
        toast.success("Message sent");
        return;
      }

      toast.error("Something has gone wrong, try again!");
    } catch (error) {
      toast.error("Something has gone wrong, try again later!");
    }
  };

  return {
    onSubmitForm,
  };
};
