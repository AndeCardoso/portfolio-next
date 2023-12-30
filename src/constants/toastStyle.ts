import { colors } from "@src/global/colors";

export const toastOptions = {
  className: "dark",
  loading: {
    style: {
      padding: "16px",
      color: colors.WHITE,
      "background-color": colors.HEADER_BACKGROUND,
    },
  },
  success: {
    style: {
      padding: "16px",
      color: colors.WHITE,
      background: colors.SUCCESS_BACKGROUND,
    },
  },
  error: {
    style: {
      padding: "16px",
      color: colors.WHITE,
      background: colors.ERROR_BACKGROUND,
    },
  },
};
