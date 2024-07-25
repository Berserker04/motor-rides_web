"use client";

import { Carousel } from "flowbite-react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

import Styles from "./_styles.module.scss";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { URL_PACKAGE_BASE_PUBLIC } from "@/shared/routes/index";
import { GET_IMAGE, GET_VIDEO } from "@/api/ApiConfig";

export default function ServiceCardPublic({ data }: { data: IPackageDto }) {
  const router = useRouter();

  const showService = () => {
    router.push(`${URL_PACKAGE_BASE_PUBLIC}/${data.slug}`);
  };

  const formateado = (price: number) =>
    price.toLocaleString("co", {
      style: "currency",
      currency: "COP",
      maximumFractionDigits: 0,
    });
    
  return (
    <div
      className={`text-gray-900 dark:text-white mb-5 rounded-lg cursor-pointer hover:scale-105 ease-in-out transition-all duration-300 ${Styles.product__card}`}
    >
      <Carousel
        className="carousel h-60 cursor-pointer"
        leftControl={
          <div className={Styles.carousel__button}>
            <MdKeyboardArrowLeft className="h-5 w-5 grid" />
          </div>
        }
        rightControl={
          <div className={Styles.carousel__button}>
            <MdKeyboardArrowRight className="h-5 w-5" />
          </div>
        }
        slide={false}
      >
        {data.images.map((image, index) => (
          <Image
            className="cursor-pointer"
            onClick={() => showService()}
            key={image.id}
            src={GET_IMAGE(image.url)}
            alt=""
            width={400}
            height={100}
          />
        ))}
        {data.videos.map((video, index) => (
          <video
            key={video.id}
            className="w-full h-full"
            preload="auto"
            controls
            loop
          >
            <source
              src={
                video.url.includes("data:video")
                  ? video.url
                  : GET_VIDEO(video.url)
              }
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        ))}
      </Carousel>
      <div onClick={() => showService()}>
        <h5 className="mt-2 mb-4 text-base font-bold tracking-tight line-clamp-1">
          {data.name}
        </h5>
        {/* Desde:{" "}
        <p className="line-clamp-1 font-bold">
          {`${
            formateado(parseFloat(data.prices[0]?.pricesTable[1][1])) || ""
          } COP`}
        </p> */}
      </div>
    </div>
  );
}
