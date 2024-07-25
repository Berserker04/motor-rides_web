import { FETCH_API } from "@/api/ApiConfig";
import { getFilterText } from "@/shared/helpers/getFilterText";
import { sendToastFromResponse } from "@/shared/helpers/sendToast";

const URL = "/travelRoutes";

export interface ITravelRouteResponse {
  travelRoutes: ITravelRouteDto[];
  paginate: IPaginate;
  message: string;
  status: number;
}

export interface ITravelRouteResponseOnly
  extends Omit<ITravelRouteResponse, "travelRoutes" | "paginate"> {
  travelRoute: ITravelRouteDto;
}

export const getTravelRouteAllService = async (
  { page, filterText, limit }: IPropsFilter,
  token: string
): Promise<ITravelRouteResponse> => {
  let filter = getFilterText(page, filterText, limit);

  const res = await FETCH_API({
    url: `${URL}${filter}`,
    token,
  }).GET({
    cache: "no-store",
  });
  return {
    message: res.message,
    status: res.status,
    travelRoutes: res.data.travelRoutes,
    paginate: res.data.paginate,
  };
};

export const getTravelRouteBySlugService = async ({
  slug,
}: {
  slug: string;
}): Promise<ITravelRouteResponseOnly> => {
  const res = await FETCH_API({
    url: `${URL}/slug/${slug}`,
  }).GET({
    // cache: "no-store",
  });
  return {
    message: res.message,
    status: res.status,
    travelRoute: res.data,
  };
};

export const setNewTravelRouteService = async (
  name: string,
  token?: string
): Promise<ITravelRouteResponseOnly> => {
  const res = await FETCH_API({
    url: `${URL}`,
    token,
  }).POST({ name });
  sendToastFromResponse(res);
  return {
    message: res.message,
    status: res.status || 404,
    travelRoute: res?.data || {},
  };
};

export const setUpdateTravelRouteService = async (
  id: number,
  name: string,
  token?: string
): Promise<ITravelRouteResponseOnly> => {
  const res = await FETCH_API({
    url: `${URL}/${id}`,
    token,
  }).PUT({ name });
  sendToastFromResponse(res);
  return {
    message: res.message,
    status: res.status || 404,
    travelRoute: res?.data || {},
  };
};

export const setDeleteTravelRouteService = async (
  id: number,
  token?: string
): Promise<ITravelRouteResponseOnly> => {
  const res = await FETCH_API({
    url: `${URL}/${id}`,
    token,
  }).DELETE();
  sendToastFromResponse(res);
  return {
    message: res.message,
    status: res.status || 404,
    travelRoute: res?.data || {},
  };
};
