import { colors } from "@global/colors";
import { poppins } from "@app/fonts";

export const toastOptions = {
  className: "dark",
  loading: {
    style: {
      fontFamily: poppins.style.fontFamily,
      padding: "16px",
      color: colors.WHITE,
      "background-color": colors.HEADER_BACKGROUND,
    },
  },
  success: {
    style: {
      fontFamily: poppins.style.fontFamily,
      padding: "16px",
      color: colors.WHITE,
      background: colors.SUCCESS_BACKGROUND,
    },
  },
  error: {
    style: {
      fontFamily: poppins.style.fontFamily,
      padding: "16px",
      color: colors.WHITE,
      background: colors.ERROR_BACKGROUND,
    },
  },
};
