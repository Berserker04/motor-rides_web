export const getPricesFromTable = (serviceDetail: IPackageDto) => {
  const pricesTableAux: TPricesTable = {};
  const pricesTable: TPricesTable = {};
  serviceDetail.prices.forEach((price) => {
    const priceDetail: IPriceDetail = {
      id: price.id,
      season: price.touristSeason.name,
      columns: price.pricesTable.shift(),
      rows: price.pricesTable,
    };
    if (pricesTableAux[price.travelRoute.id]) {
      pricesTableAux[price.travelRoute.id].prices.push(priceDetail);
    } else {
      pricesTableAux[price.travelRoute.id] = {
        travelRoute: price.travelRoute,
        prices: [priceDetail],
      };
    }
  });
  Object.keys(pricesTableAux).forEach((key, i) => {
    pricesTable[i] = pricesTableAux[key];
  });
  return pricesTable;
};

export const getPricesFromCreateTable = (
  priceTable: any[],
  travelRoutesList: ITravelRouteDto[],
  touristSeasonList: ITouristSeasonDto[]
) => {
  const pricesTableAux: TPricesTable = {};
  const pricesTable: TPricesTable = {};
  const priceCreate: IPriceCreate[] = structuredClone(priceTable);
  priceCreate?.forEach((price) => {
    const priceDetail: IPriceDetail = {
      id: price.id,
      season:
        touristSeasonList?.find((season) => season.id === price.touristSeasonId)
          ?.name || "",
      columns: price.pricesTable.shift(),
      rows: price.pricesTable,
    };
    const travelRoute = travelRoutesList?.find(
      (route) => route.id === price.travelRouteId
    );
    if (pricesTableAux[price.travelRouteId]) {
      pricesTableAux[price.travelRouteId].prices.push(priceDetail);
    } else {
      pricesTableAux[price.travelRouteId] = {
        travelRoute: {
          id: travelRoute?.id || 0,
          name: travelRoute?.name || "",
        },
        prices: [priceDetail],
      };
    }
  });
  Object.keys(pricesTableAux).forEach((key, i) => {
    pricesTable[i] = pricesTableAux[key];
  });
  return pricesTable;
};
