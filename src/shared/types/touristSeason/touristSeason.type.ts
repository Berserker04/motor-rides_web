interface ITouristSeason {
  id: number;
  name: string;
}

interface ITouristSeasonDto extends ITouristSeason {
  slug: string;
  isDeleted: string;
}


interface ITouristSeasonList {
  touristSeasons: ITouristSeasonDto[];
  paginate: IPaginate;
}