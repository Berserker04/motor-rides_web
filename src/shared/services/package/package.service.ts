import { FETCH_API } from "@/api/ApiConfig";
import { getFilterText } from "@/shared/helpers/getFilterText";
import { sendToastFromResponse } from "@/shared/helpers/sendToast";

const URL = "/packages";

export interface IPackageResponse {
  packages: IPackageDto[];
  paginate: IPaginate;
  message: string;
  status: number;
}

export interface IPackageResponseOnly
  extends Omit<IPackageResponse, "packages" | "paginate"> {
  package: IPackageDto;
}

export const getPackageAllService = async ({
  page,
  filterText,
  limit
}: IPropsFilter): Promise<IPackageResponse> => {
  let filter = getFilterText(page, filterText, limit);

  const res = await FETCH_API({
    url: `${URL}${filter}`,
  }).GET({
    cache: "no-store",
  });
  console.log("res.data.packages => ", res.data.packages)
  return {
    message: res.message,
    status: res.status,
    packages: res.data.packages,
    paginate: res.data.paginate,
  };
};

export const getPackageByIdService = async (
  id: number
): Promise<IPackageResponseOnly> => {
  const res = await FETCH_API({
    url: `${URL}/${id}`,
  }).GET({
    // cache: "no-store",
  });
  return {
    message: res.message,
    status: res.status,
    package: res.data,
  };
};

export const getPackageBySlugService = async ({
  slug,
}: {
  slug: string;
}): Promise<IPackageResponseOnly> => {
  const res = await FETCH_API({
    url: `${URL}/slug/${slug}`,
  }).GET({
    // cache: "no-store",
  });
  return {
    message: res.message,
    status: res.status,
    package: res.data,
  };
};

export const setNewPackageService = async (
  token?: string
): Promise<IPackageResponseOnly> => {
  const res = await FETCH_API({
    url: `${URL}`,
    token,
  }).POST();
  sendToastFromResponse(res);
  return {
    message: res.message,
    status: res.status || 404,
    package: res?.data || {},
  };
};

export const setSavePackageService = async (
  token: string,
  data?: IFormInputPackageService
): Promise<IPackageResponseOnly> => {
  const res = await FETCH_API({
    url: `${URL}/${data?.id}`,
    token,
  }).PATCH(data);
  sendToastFromResponse(res);
  return {
    message: res.message,
    status: res.status || 404,
    package: res?.data || {},
  };
};

export const setPublishPackageService = async (
  token?: string,
  data?: IFormInputPackageService
): Promise<IPackageResponseOnly> => {
  const res = await FETCH_API({
    url: `${URL}/publish`,
    token,
  }).PUT(data);
  sendToastFromResponse(res);
  return {
    message: res.message,
    status: res.status || 404,
    package: res?.data || {},
  };
};

export const setDeletePackageService = async (
  token?: string,
  packageId?: number
): Promise<IPackageResponseOnly> => {
  const res = await FETCH_API({
    url: `${URL}/${packageId}`,
    token,
  }).DELETE();
  sendToastFromResponse(res);
  return {
    message: res.message,
    status: res.status || 404,
    package: res?.data || {},
  };
};
