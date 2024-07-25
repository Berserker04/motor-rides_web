interface IFormInputPackageService
  extends Omit<
    IPackage,
    "prices" | "images" | "videos" | "deleteImages" | "deleteVideos"
  > {
  prices: {
    id: number | null;
    pricesTable: ((string | undefined)[] | undefined)[];
    touristSeasonId: number;
    travelRouteId: number;
  }[];
  images: (string | undefined)[];
  videos?: (string | undefined)[] | undefined;
  deleteImages?: (string | undefined)[] | undefined;
  deleteVideos?: (string | undefined)[] | undefined;
  deletePrices?: (number | null | undefined)[] | undefined;
}

// id: number;
// name: string;
// include: string;
// noInclude: string;
// description: string;
// note: string;
// review: string;
// prices: IPrice[];
// images: string[];
// videos: string[];
// deleteImages: number[];
// deleteVideos: number[];
