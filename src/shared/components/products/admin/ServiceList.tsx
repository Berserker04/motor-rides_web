import React from "react";
import ProductCard from "./ServiceCard";

interface IProductList {
  loading: boolean;
  data: any[];
}

const ServiceListAdmin = ({ data, loading }: IProductList) => {
  return (
    <>
      {
        loading ? (
          <div className="grid place-items-center pb-5">
            <p>Cargando...</p>
          </div>
        ) : (
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4">
            {data.map((product: IPackageDto) => (
              <ProductCard key={product.id} data={product} />
            ))}
            {!data.length && (
              <p className="text-center col-span-5 dark:text-white">No hay datos para mostrar</p>
            )}
          </div>
        )
      }
    </>

  );
};

export default ServiceListAdmin;
