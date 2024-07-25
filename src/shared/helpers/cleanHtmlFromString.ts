export const cleanHtmlFromString = (htmlString: string) => {
  return htmlString.replace(/<\/?[^>]+(>|$)/g, "");
};
