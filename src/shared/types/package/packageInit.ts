import { paginateInit } from "../common/commonInit";

export const packageDtoInit: IPackageDto = {
  available: "",
  comments: [],
  description: "",
  id: 0,
  images: [],
  include: "",
  name: "",
  noInclude: "",
  note: "",
  prices: [],
  private: "",
  review: "",
  slug: "",
  state: { id: 0, name: "" },
  videos: [],
};

export const packageListInit: IPackageList = {
  packages: [],
  paginate: paginateInit,
};
