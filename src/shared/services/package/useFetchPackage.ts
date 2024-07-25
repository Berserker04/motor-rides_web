import { useQuery } from "@tanstack/react-query";
import {
  getPackageAllService,
  getPackageByIdService,
  getPackageBySlugService,
  setNewPackageService,
  setPublishPackageService,
  setSavePackageService,
} from "./package.service";

const limit = 10;

export const useFetchPackages = ({ page, filterText, limit }: IPropsFilter) => {
  return useQuery({
    queryKey: ["packages"],
    queryFn: () => getPackageAllService({ page, filterText, limit }),
  });
};

export const useFetchPackageBySlug = ({ slug }: { slug: string }) => {
  return useQuery({
    queryKey: ["packageDetail"],
    queryFn: () => getPackageBySlugService({ slug }),
  });
};

export const useFetchPackageById = (id: number) => {
  return useQuery({
    queryKey: ["packageDetail"],
    queryFn: () => getPackageByIdService(id),
  });
};

export const useFetchNewPackage = (token: string = "") => {
  return useQuery({
    queryKey: ["newPackage"],
    queryFn: () => setNewPackageService(token),
  });
};

export const useFetchSavePackage = (
  token: string = "",
  data: IFormInputPackageService
) => {
  return useQuery({
    queryKey: ["savePackage", limit],
    queryFn: () => setSavePackageService(token, data),
  });
};

export const useFetchPublishPackage = (
  token: string = "",
  data: IFormInputPackageService
) => {
  return useQuery({
    queryKey: ["publishPackage", 10],
    queryFn: () => setPublishPackageService(token, data),
  });
};
