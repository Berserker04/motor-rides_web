interface IPrice {
  id?: number;
  pricesTable: string[][];
  touristSeason: ITouristSeasonDto;
  travelRoute: ITravelRouteDto;
}

type TPricesTable = Record<string, IPricesTable>;

interface IPricesTable {
  travelRoute: ITravelRoute;
  prices: IPriceDetail[];
}

interface IPriceDetail {
  id?: number;
  season?: string;
  columns?: string[];
  rows?: string[][];
}

interface IPriceCreate {
  id: any;
  touristSeasonId: number;
  travelRouteId: number;
  pricesTable: string[][];
}