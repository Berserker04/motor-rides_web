"use client";

import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";

import { useFetchTouristSeasons } from "@/shared/services/touristSeason/useFetchTouristSeason";
import { useUserStore } from "@/shared/store/user.store";
import { ModalDefault, ServiceListHeaderAdmin } from "@/shared/components/index";
import {
  ITouristSeasonResponseOnly,
  setNewTouristSeasonService,
  setUpdateTouristSeasonService,
} from "@/shared/services/touristSeason/touristSeason.service";
import { yupResolver } from "@hookform/resolvers/yup";
import { STATUS_CODE, paginateInit } from "@/shared/types/common/commonInit";

import TouristSeasonList from "./components/TouristSeasonList";
import { TouristSeasonModalBody } from "./components/TouristSeasonModalBody";

const schemaService = yup
  .object({
    name: yup
      .string()
      .required("El nombre es requerido")
      .min(5, "El nombre debe tener minimo 5 caracteres"),
    id: yup.number().default(-1).required("El id es requerido"),
  })
  .required();

const TouristSeason = () => {
  const { token } = useUserStore();

  const [filter, setFilter] = useState({
    page: 1,
    filterText: "",
  });

  const [touristSeasonsList, setTouristSeasonsList] =
    useState<ITouristSeasonList>({
      paginate: paginateInit,
      touristSeasons: [],
    });

  const { isLoading, data, refetch }: any = useFetchTouristSeasons(
    filter,
    token || ""
  );

  const getTouristSeasonsSearh = ({ type, value }: IPropsFilterType) => {
    setFilter({ ...filter, [type]: value });
    refetch();
    setTouristSeasonsList({ ...data });
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

  const filterSeasons = async (filterText: string = "") => {
    getTouristSeasonsSearh({ type: "filterText", value: filterText });
  };

  const onSubmit: SubmitHandler<ITouristSeason> = async (item) => {
    if (item.id > 0) {
      onSubmitUpdate(item);
      return;
    }
    setIsProcessing(true);
    const response = await setNewTouristSeasonService(item.name, token || "");
    closeModal(response);
  };

  const onSubmitUpdate: SubmitHandler<ITouristSeason> = async (item) => {
    setIsProcessing(true);
    const response = await setUpdateTouristSeasonService(
      item.id,
      item.name,
      token || ""
    );
    closeModal(response);
  };

  const updateSeasson = (touristSeason: ITouristSeason) => {
    resetModal();
    setValue("id", touristSeason.id);
    setValue("name", touristSeason.name);
  };

  const resetModal = () => {
    reset();
    setIsProcessing(false);
    setShowModal(true);
  };

  const closeModal = (response: ITouristSeasonResponseOnly) => {
    if (
      response.status === STATUS_CODE.CREATED ||
      response.status === STATUS_CODE.SUCCESS
    ) {
      filterSeasons();
      setShowModal(false);
    }
    setIsProcessing(false);
  };

  const modalBody = () => (
    <TouristSeasonModalBody
      onSubmit={handleSubmit(onSubmit)}
      register={register}
      errors={errors}
    />
  );

  useEffect(() => {
    setTouristSeasonsList({ ...data });
  }, [data]);

  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  return (
    <>
      <ServiceListHeaderAdmin
        type={"any"}
        btnTitle="temporada"
        handleChange={filterSeasons}
        openModal={() => resetModal()}
      />
      <TouristSeasonList
        token={token || ""}
        loading={isLoading}
        data={touristSeasonsList}
        getTouristSeasonsSearh={getTouristSeasonsSearh}
        filterSeasons={filterSeasons}
        updateHandler={(touristSeason: ITouristSeason) =>
          updateSeasson(touristSeason)
        }
      />
      <ModalDefault
        isProcessing={isProcessing}
        title={
          getValues("id") > 0 ? "Actualizar temporada" : "Registrar temporada"
        }
        formId="formTouristSeason"
        btnTitle="Guardar"
        saveHandler={() => null}
        body={modalBody()}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </>
  );
};

export default TouristSeason;
