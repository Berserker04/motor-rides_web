import { useQuery } from "@tanstack/react-query";
import {
  getTravelRouteAllService,
  getTravelRouteBySlugService,
  setDeleteTravelRouteService,
  setNewTravelRouteService,
  setUpdateTravelRouteService,
} from "./travelRoute.service";

const limit = 10;

export const useFetchTravelRoutes = (
  { page, filterText }: IPropsFilter,
  token: string = ""
) => {
  return useQuery({
    queryKey: ["allTravelRoutes", limit],
    queryFn: () => getTravelRouteAllService({ page, filterText }, token),
  });
};

export const useFetchTravelRouteBySlug = ({ slug }: { slug: string }) => {
  return useQuery({
    queryKey: ["travelRouteDetail", limit],
    queryFn: () => getTravelRouteBySlugService({ slug }),
  });
};

export const useFetchNewTravelRoute = (name: string, token: string = "") => {
  return useQuery({
    queryKey: ["newTravelRoute", limit],
    queryFn: () => setNewTravelRouteService(name, token),
  });
};

export const useFetchUpdateTravelRoute = (
  id: number,
  name: string,
  token: string = ""
) => {
  return useQuery({
    queryKey: ["posts", limit],
    queryFn: () => setUpdateTravelRouteService(id, name, token),
  });
};

export const useFetchDeleteTravelRoute = (id: number, token: string = "") => {
  return useQuery({
    queryKey: ["deleteTravelRoute", limit],
    queryFn: () => setDeleteTravelRouteService(id, token),
  });
};
