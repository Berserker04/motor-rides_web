const BASE_URL_API = process.env.NEXT_PUBLIC_BASE_URL_API;
const BASE_URL_FILES = process.env.NEXT_PUBLIC_BASE_URL_FILES;

interface IApiConfig {
  url: string;
  config?: object;
  token?: string;
}

interface IApiConfigPost {
  resource?: object;
}

export const FETCH_API = ({ url = "", config = {}, token }: IApiConfig) => {
  const defaultConfig = {
    method: "GET",
    headers: new Headers({
      "Content-Type": "application/json; charset=UTF-8",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    }),
  };

  const res = ({ data = [], message = "", status = 200 }: IResponse) => ({
    data,
    message,
    status,
  });

  return {
    GET: async (config = {}) =>
      await fetch(`${BASE_URL_API}${url}`, {
        ...defaultConfig,
        ...config,
        // cache:''
      })
        .then((response) => response.json())
        .then((json) => res(json)),
    POST: async (data = {}, config = {}) =>
      await fetch(`${BASE_URL_API}${url}`, {
        ...defaultConfig,
        method: "POST",
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((json) => res(json)),
    PUT: async (data = {}, config = {}) =>
      await fetch(`${BASE_URL_API}${url}`, {
        ...defaultConfig,
        method: "PUT",
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((json) => res(json)),
    PATCH: async (data = {}, config = {}) =>
      await fetch(`${BASE_URL_API}${url}`, {
        ...defaultConfig,
        method: "PATCH",
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((json) => res(json)),
    DELETE: async (config = {}) =>
      await fetch(`${BASE_URL_API}${url}`, {
        ...defaultConfig,
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((json) => res(json)),
  };
};

export const GET_IMAGE = (urlImage: string) => {
  return `${BASE_URL_FILES}/images/${urlImage}`;
};

export const GET_VIDEO = (urlVideo: string) => {
  return `${BASE_URL_FILES}/videos/${urlVideo}`;
};
