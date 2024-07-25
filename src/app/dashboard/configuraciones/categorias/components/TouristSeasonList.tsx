"use client";

import { Paginate, TableDefault } from "@/shared/components/index";
import { setDeleteTouristSeasonService } from "@/shared/services/touristSeason/touristSeason.service";
import toast from "react-hot-toast";

interface props {
  token: string;
  loading: boolean;
  data: ITouristSeasonList;
  getTouristSeasonsSearh: ({ type, value }: IPropsFilterType) => void;
  filterSeasons: () => void;
  updateHandler: (touristSeason: ITouristSeason) => void;
}

const columns: IColumn[] = [
  {
    title: "Nombre",
    name: "name",
  },
  {
    title: "Estado",
    name: "isDeleted",
  },
];

const TouristSeasonList = ({
  token,
  loading,
  data: { paginate, touristSeasons },
  getTouristSeasonsSearh,
  filterSeasons,
  updateHandler
}: props) => {

  const deleteHandler = async (id: number) => {
    const response = await setDeleteTouristSeasonService(id, token || "");

    if (response.status === 200 || response.status === 201) {
      filterSeasons();
    } 
    // else {
    //   toast("No se realizo el registro", {
    //     icon: "⚠️",
    //   });
    // }
  };

  const actions: IAction = {
    editEvent: updateHandler,
    delEvent: deleteHandler,
  };

  return (
    <>
      {loading ? (
        <div className="grid place-items-center pb-5">
          <p>Cargando...</p>
        </div>
      ) : touristSeasons ? (
        <>
          <Paginate
            title={"temporadas"}
            getSearh={getTouristSeasonsSearh}
            paginate={paginate}
          />
          <div className="overflow-x-auto py-4 my-5">
            <TableDefault
              columns={columns}
              actions={actions}
              data={touristSeasons}
              loading={loading}
            />
          </div>
          <Paginate
            title={"temporadas"}
            getSearh={getTouristSeasonsSearh}
            paginate={paginate}
          />
        </>
      ) : (
        <p>No hay datos</p>
      )}
    </>
  );
};

export default TouristSeasonList;
