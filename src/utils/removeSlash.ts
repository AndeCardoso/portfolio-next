export const removeSlash = (text: string) => {
  if (!text) return;
  return text.replace("/", "");
};
