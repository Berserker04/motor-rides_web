interface IPackage {
  id: number;
  name: string;
  include?: string | null | undefined;
  noInclude?: string | null | undefined;
  description?: string | null | undefined;
  note?: string | null | undefined;
  review?: string | null | undefined;
  prices: IPrice[];
  images: string[];
  videos: string[];
  deleteImages?: number[];
  deleteVideos?: number[];
}

interface IPackageDto
  extends Omit<
    IPackage,
    "images" | "videos" | "deleteImages" | "deleteVideos"
  > {
  slug: string;
  private: string;
  available: string;
  user?: IUser;
  state: IState;
  images: IFile[];
  videos: IFile[];
  comments: ICommentDto[];
}

interface IPackageList {
  packages: IPackageDto[];
  paginate: IPaginate;
}