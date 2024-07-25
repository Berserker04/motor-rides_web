import { useQuery } from "@tanstack/react-query";
import {
  getTouristSeasonAllService,
  getTouristSeasonBySlugService,
  setDeleteTouristSeasonService,
  setNewTouristSeasonService,
  setUpdateTouristSeasonService,
} from "./touristSeason.service";

const limit = 10;

export const useFetchTouristSeasons = (
  { page, filterText }: IPropsFilter,
  token: string = ""
) => {
  return useQuery({
    queryKey: ["allSeasons", limit],
    queryFn: () => getTouristSeasonAllService({ page, filterText }, token),
  });
};

export const useFetchTouristSeasonBySlug = ({ slug }: { slug: string }) => {
  return useQuery({
    queryKey: ["touristSeasonDetail", limit],
    queryFn: () => getTouristSeasonBySlugService({ slug }),
  });
};

export const useFetchNewTouristSeason = (name: string, token: string = "") => {
  return useQuery({
    queryKey: ["newTouristSeason", limit],
    queryFn: () => setNewTouristSeasonService(name, token),
  });
};

export const useFetchUpdateTouristSeason = (
  id: number,
  name: string,
  token: string = ""
) => {
  return useQuery({
    queryKey: ["updateTouristSeason", limit],
    queryFn: () => setUpdateTouristSeasonService(id, name, token),
  });
};

export const useFetchDeleteTouristSeason = (id: number, token: string = "") => {
  return useQuery({
    queryKey: ["deleteTouristSeason", limit],
    queryFn: () => setDeleteTouristSeasonService(id, token),
  });
};
