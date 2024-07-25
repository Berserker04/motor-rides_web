interface ITravelRoute {
  id: number;
  name: string;
}

interface ITravelRouteDto extends ITravelRoute {
  slug: string;
  isDeleted: string;
}


interface ITravelRouteList {
  travelRoutes: ITravelRouteDto[];
  paginate: IPaginate;
}