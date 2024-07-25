"use client";

import {
  URL_ACTIVITY_BASE,
  URL_HOTEL_BASE,
  URL_PACKAGE_BASE_PUBLIC,
} from "@/shared/routes/index";
import { useRouter } from "next/navigation";
import { ChangeEvent, ChangeEventHandler, EventHandler } from "react";

const TYPES = {
  package: "paquete",
  hotel: "hotel",
  activity: "actividad",
  any: "",
};

const URL_NEW = {
  package: `${URL_PACKAGE_BASE_PUBLIC}/nuevo`,
  hotel: `${URL_HOTEL_BASE}/nuevo`,
  activity: `${URL_ACTIVITY_BASE}/nuevo`,
  any: "",
};

interface props {
  btnTitle?: string;
  type: "package" | "hotel" | "activity" | "any";
  handleChange: any;
  openModal?: (() => void) | null;
}

const ServiceListHeaderPublic = ({
  type,
  btnTitle,
  handleChange,
  openModal = null,
}: props) => {
  const router = useRouter();
  const toNewService = () => {
    if (openModal) {
      openModal();
      return;
    }
    router.push(URL_NEW[type]);
  };
  return (
    <div className="sm:px-2 md:px-8 lg:px-16 2xl:px-48 flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 py-4 ">
      <div className="w-full md:w-1/2">
        <form className="flex items-center" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="simple-search" className="sr-only">
            Buscar...
          </label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <input
              onChange={(e) => handleChange(e.target.value)}
              type="search"
              id="simple-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Buscar..."
              required
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ServiceListHeaderPublic;
