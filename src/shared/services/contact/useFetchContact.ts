import { useQuery } from "@tanstack/react-query";
import {
  getContactAllService,
  getContactBySlugService,
} from "./contact.service";

const limit = 10;

export const useFetchContacts = (
  { page, filterText }: IPropsFilter,
  token: string = ""
) => {
  return useQuery({
    queryKey: ["allSeasons", limit],
    queryFn: () => getContactAllService({ page, filterText }, token),
  });
};

export const useFetchContactBySlug = ({ slug }: { slug: string }) => {
  return useQuery({
    queryKey: ["touristSeasonDetail", limit],
    queryFn: () => getContactBySlugService({ slug }),
  });
};
