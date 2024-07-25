import { FETCH_API } from "@/api/ApiConfig";
import { getFilterText } from "@/shared/helpers/getFilterText";
import { sendToastFromResponse } from "@/shared/helpers/sendToast";

const URL = "/emails";

export interface IContactResponse {
  contacts: IContactDto[];
  paginate: IPaginate;
  message: string;
  status: number;
}

export interface IContactResponseOnly
  extends Omit<IContactResponse, "contacts" | "paginate"> {
  contact: IContactDto;
}

export const getContactAllService = async (
  { page, filterText, limit }: IPropsFilter,
  token: string
): Promise<IContactResponse> => {
  let filter = getFilterText(page, filterText, limit);

  const res = await FETCH_API({
    url: `${URL}?s${filter}`,
    token,
  }).GET({
    cache: "no-store",
  });
  return {
    message: res.message,
    status: res.status,
    contacts: res.data.contacts,
    paginate: res.data.paginate,
  };
};

export const getContactBySlugService = async ({
  slug,
}: {
  slug: string;
}): Promise<IContactResponseOnly> => {
  const res = await FETCH_API({
    url: `${URL}/slug/${slug}`,
  }).GET({
    // cache: "no-store",
  });
  return {
    message: res.message,
    status: res.status,
    contact: res.data,
  };
};

export const setNewContactService = async (
  token?: string,
  data?: IFormInputContact
): Promise<IContactResponseOnly> => {
  const res = await FETCH_API({
    url: `${URL}`,
    token,
  }).POST(data);
  sendToastFromResponse(res);
  return {
    message: res.message,
    status: res.status || 404,
    contact: res?.data || {},
  };
};

export const setUpdateContactService = async (
  id: number,
  name: string,
  token?: string
): Promise<IContactResponseOnly> => {
  const res = await FETCH_API({
    url: `${URL}/${id}`,
    token,
  }).PUT({ name });
  sendToastFromResponse(res);
  return {
    message: res.message,
    status: res.status || 404,
    contact: res?.data || {},
  };
};

export const setDeleteContactService = async (
  id: number,
  token?: string
): Promise<IContactResponseOnly> => {
  const res = await FETCH_API({
    url: `${URL}/${id}`,
    token,
  }).DELETE();
  sendToastFromResponse(res);
  return {
    message: res.message,
    status: res.status || 404,
    contact: res?.data || {},
  };
};
