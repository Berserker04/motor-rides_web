import { FETCH_API } from "@/api/ApiConfig";
import { getFilterText } from "@/shared/helpers/getFilterText";
import { sendToastFromResponse } from "@/shared/helpers/sendToast";

const URL = "/categories";

export interface ITouristSeasonResponse {
  touristSeasons: ITouristSeasonDto[];
  paginate: IPaginate;
  message: string;
  status: number;
}

export interface ITouristSeasonResponseOnly
  extends Omit<ITouristSeasonResponse, "touristSeasons" | "paginate"> {
  touristSeason: ITouristSeasonDto;
}

export const getTouristSeasonAllService = async (
  { page, filterText, limit }: IPropsFilter,
  token: string
): Promise<ITouristSeasonResponse> => {
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
    touristSeasons: res.data.categories,
    paginate: res.data.paginate,
  };
};

export const getTouristSeasonBySlugService = async ({
  slug,
}: {
  slug: string;
}): Promise<ITouristSeasonResponseOnly> => {
  const res = await FETCH_API({
    url: `${URL}/slug/${slug}`,
  }).GET({
    // cache: "no-store",
  });
  return {
    message: res.message,
    status: res.status,
    touristSeason: res.data,
  };
};

export const setNewTouristSeasonService = async (
  name: string,
  token?: string
): Promise<ITouristSeasonResponseOnly> => {
  const res = await FETCH_API({
    url: `${URL}`,
    token,
  }).POST({ name });
  sendToastFromResponse(res);
  return {
    message: res.message,
    status: res.status || 404,
    touristSeason: res?.data || {},
  };
};

export const setUpdateTouristSeasonService = async (
  id: number,
  name: string,
  token?: string
): Promise<ITouristSeasonResponseOnly> => {
  const res = await FETCH_API({
    url: `${URL}/${id}`,
    token,
  }).PUT({ name });
  sendToastFromResponse(res);
  return {
    message: res.message,
    status: res.status || 404,
    touristSeason: res?.data || {},
  };
};

export const setDeleteTouristSeasonService = async (
  id: number,
  token?: string
): Promise<ITouristSeasonResponseOnly> => {
  const res = await FETCH_API({
    url: `${URL}/${id}`,
    token,
  }).DELETE();
  sendToastFromResponse(res);
  return {
    message: res.message,
    status: res.status || 404,
    touristSeason: res?.data || {},
  };
};
