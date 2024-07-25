export const cleanHtmlText = (htmlText: string = "") => {
  return htmlText?.replace(/<[^>]*>/g, "");
};
