"use client";

import { Pagination } from "flowbite-react";
import React, { useState } from "react";

interface props {
  title: string,
  paginate: IPaginate;
  getSearh: any;
}

const Paginate = ({title, paginate, getSearh }: props) => {

  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = async (page: number) => {
    setCurrentPage(page);
    getSearh({type: "page", value: page});
  };

  return (
    <div className="sm:px-2 md:px-8 lg:px-16 2xl:px-48 flex items-center justify-between text-center flex-wrap px-4">
      <p className="dark:text-white">{`Total de ${title} ${paginate?.total}`}</p>
      <Pagination
        currentPage={currentPage}
        layout="pagination"
        onPageChange={onPageChange}
        showIcons
        nextLabel="Siguiente"
        previousLabel="Atras"
        totalPages={paginate?.totalPage}
      />
    </div>
  );
};

export default Paginate;
