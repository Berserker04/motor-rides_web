import React from "react";
import ProductCard from "./ServiceCard";

interface IProductList {
  loading: boolean;
  showBanner?: boolean;
  data: any[];
  Banner: () => React.JSX.Element;
}

const ServiceListPublic = ({
  data,
  loading,
  Banner,
  showBanner = false,
}: IProductList) => {
  const showBannerView = () => (
    <>
      <div className="sm:px-2 md:px-8 lg:px-16 2xl:px-48 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4">
        {data?.slice(0, 10)?.map((product: IPackageDto) => (
          <ProductCard key={product.id} data={product} />
        ))}
        {!data.length && (
          <p className="text-center col-span-5 dark:text-white">
            No hay datos para mostrar
          </p>
        )}
      </div>
      <Banner />
      <div className="sm:px-2 md:px-8 lg:px-16 2xl:px-48 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4">
        {data?.slice(10)?.map((product: IPackageDto) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>
    </>
  );

  const noShowBannerView = () => (
    <div className="sm:px-2 md:px-8 lg:px-16 2xl:px-48 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4">
      {data.map((product: IPackageDto) => (
        <ProductCard key={product.id} data={product} />
      ))}
      {!data.length && (
        <p className="text-center col-span-5 dark:text-white">
          No hay datos para mostrar
        </p>
      )}
    </div>
  );

  return (
    <>
      {loading ? (
        <>
          <div className="grid place-items-center pb-5">
            <p>Cargando...</p>
          </div>
          {showBanner && <Banner />}
        </>
      ) : (
        <>{showBanner ? showBannerView() : noShowBannerView()}</>
      )}
    </>
  );
};

export default ServiceListPublic;
