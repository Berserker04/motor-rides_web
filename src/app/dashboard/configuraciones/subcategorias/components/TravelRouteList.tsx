"use client";

import { Paginate, TableDefault } from "@/shared/components";
import { setDeleteTravelRouteService } from "@/shared/services/travelRoute/travelRoute.service";

interface props {
  token: string;
  loading: boolean;
  data: ITravelRouteList;
  getTravelRoutesSearh: ({ type, value }: IPropsFilterType) => void;
  filterTravelRoutes: () => void;
  updateHandler: (travelRoute: ITravelRoute) => void;
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

const TravelRouteList = ({
  token,
  loading,
  data: { paginate, travelRoutes },
  getTravelRoutesSearh,
  filterTravelRoutes,
  updateHandler
}: props) => {

  const deleteHandler = async (id: number) => {
    const response = await setDeleteTravelRouteService(id, token || "");

    if (response.status === 200 || response.status === 201) {
      filterTravelRoutes();
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
      ) : travelRoutes ? (
        <>
          <Paginate
            title={"rutas de viajes"}
            getSearh={getTravelRoutesSearh}
            paginate={paginate}
          />
          <div className="overflow-x-auto py-4 my-5">
            <TableDefault
              columns={columns}
              actions={actions}
              data={travelRoutes}
              loading={loading}
            />
          </div>
          <Paginate
            title={"rutas de viajes"}
            getSearh={getTravelRoutesSearh}
            paginate={paginate}
          />
        </>
      ) : (
        <p>No hay datos</p>
      )}
    </>
  );
};

export default TravelRouteList;
