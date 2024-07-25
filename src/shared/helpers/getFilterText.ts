export const getFilterText = (page: number | undefined, filterText: string = "", limit: number | undefined) => {
  let filter = "?s";
  filter += page ? `&page=${page}` : "";
  filter += filterText ? `&filterText=${filterText}` : "";
  filter += limit ? `&limit=${limit}` : "";

  return filter;
};
