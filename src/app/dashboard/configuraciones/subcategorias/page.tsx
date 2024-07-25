"use client";

import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";

import { useUserStore } from "@/shared/store/user.store";
import { STATUS_CODE, paginateInit } from "@/shared/types/common/commonInit";
import { useFetchTravelRoutes } from "@/shared/services/travelRoute/useFetchTravelRoute";
import { ITravelRouteResponseOnly, setNewTravelRouteService, setUpdateTravelRouteService } from "@/shared/services/travelRoute/travelRoute.service";
import { ModalDefault, ServiceListHeaderAdmin } from "@/shared/components";
import { yupResolver } from "@hookform/resolvers/yup";

import TravelRouteList from "./components/TravelRouteList";
import { TravelRouteModalBody } from "./components/TravelRouteModalBody";

const schemaService = yup
  .object({
    name: yup
      .string()
      .required("El nombre es requerido")
      .min(5, "El nombre debe tener minimo 5 caracteres"),
    id: yup.number().default(-1).required("El id es requerido"),
  })
  .required();

const TravelRoute = () => {
  const { token } = useUserStore();

  const [filter, setFilter] = useState({
    page: 1,
    filterText: "",
  });

  const [travelRoutesList, setTravelRoutesList] = useState<ITravelRouteList>({
    paginate: paginateInit,
    travelRoutes: [],
  });

  const { isLoading, data, refetch }: any = useFetchTravelRoutes(
    filter,
    token || ""
  );

  const getTravelRoutesSearh = ({ type, value }: IPropsFilterType) => {
    setFilter({ ...filter, [type]: value });
    refetch();
    setTravelRoutesList({ ...data });
  };

  const [showModal, setShowModal] = useState<boolean>(false);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaService),
  });

  const filterTravelRoutes = async (filterText: string = "") => {
    getTravelRoutesSearh({ type: "filterText", value: filterText });
  };

  const onSubmit: SubmitHandler<ITravelRoute> = async (item) => {
    if (item.id > 0) {
      onSubmitUpdate(item);
      return;
    }
    setIsProcessing(true);
    const response = await setNewTravelRouteService(item.name, token || "");
    closeModal(response);
  };

  const onSubmitUpdate: SubmitHandler<ITravelRoute> = async (item) => {
    setIsProcessing(true);
    const response = await setUpdateTravelRouteService(
      item.id,
      item.name,
      token || ""
    );
    closeModal(response);
  };

  const updateTravelRoute = (travelRoute: ITravelRoute) => {
    resetModal();
    setValue("id", travelRoute.id);
    setValue("name", travelRoute.name);
  };

  const resetModal = () => {
    reset();
    setIsProcessing(false);
    setShowModal(true);
  };

  const closeModal = (response: ITravelRouteResponseOnly) => {
    if (
      response.status === STATUS_CODE.CREATED ||
      response.status === STATUS_CODE.SUCCESS
    ) {
      filterTravelRoutes();
      setShowModal(false);
    }
    setIsProcessing(false);
  };

  const modalBody = () => (
    <TravelRouteModalBody
      onSubmit={handleSubmit(onSubmit)}
      register={register}
      errors={errors}
    />
  );

  useEffect(() => {
    setTravelRoutesList({ ...data });
  }, [data]);

  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  return (
    <>
      <ServiceListHeaderAdmin
        type={"any"}
        btnTitle="ruta de viaje"
        handleChange={filterTravelRoutes}
        openModal={() => resetModal()}
      />
      <TravelRouteList
        token={token || ""}
        loading={isLoading}
        data={travelRoutesList}
        getTravelRoutesSearh={getTravelRoutesSearh}
        filterTravelRoutes={filterTravelRoutes}
        updateHandler={(travelRoute: ITravelRoute) =>
          updateTravelRoute(travelRoute)
        }
      />
      <ModalDefault
        isProcessing={isProcessing}
        title={
          getValues("id") > 0
            ? "Actualizar ruta de viaje"
            : "Registrar ruta de viaje"
        }
        formId="formTravelRoute"
        btnTitle="Guardar"
        saveHandler={() => null}
        body={modalBody()}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </>
  );
};

export default TravelRoute;
