import { Label } from "flowbite-react";
import React from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";

interface props {
  register: UseFormRegister<ITouristSeason>;
  errors: FieldErrors<ITouristSeason>;
  onSubmit: ()=> void;
}

export const TouristSeasonModalBody = ({ onSubmit, register, errors }: props) => {
  return (
    <>
      <form id="formTouristSeason" onSubmit={onSubmit}>
        <div className="mb-2 block">
          <Label htmlFor="name" value="Nombre de temporada" />
        </div>
        <input
          {...register("name")}
          type="text"
          id="username-error"
          className={` text-sm rounded-lg  block w-full p-2.5 ${
            errors.name &&
            "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500 dark:bg-red-100 dark:border-red-400"
          }`}
          placeholder="Ingrese temporada"
        />
        {errors.name && (
          <p className="mt-2 text-sm text-red-600 dark:text-red-500">
            {errors.name?.message}
          </p>
        )}
        {errors.id && (
          <p className="mt-2 text-sm text-red-600 dark:text-red-500">
            {errors.id?.message}
          </p>
        )}
      </form>
    </>
  );
};
