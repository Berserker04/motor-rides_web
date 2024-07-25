"use client"

import React from "react";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

import LoaderFull from "@/shared/components/ui/loader/LoaderFull";
// import { useUserStore } from "@/store/user.store";
// import { Toast } from "@/components/index";

import NavbarAdmin from "./NavbarAdmin";
import FooterAdmin from "./FooterAdmin";
import NavbarAdminTop from "./NavbarAdminTop";

const LayoutAdmin = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
    const router = useRouter();
    const { data: session, status }: any = useSession();
    const [menuState, setMenuState] = useState<boolean>(false);
    // const { setUser } = useUserStore();
  
    const onClickBars = () => {
      setMenuState(!menuState);
    };
  
    useEffect(() => {
      const token = localStorage.getItem("token");
    //   setUser({ user: session?.user, token });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  
    if (status === "unauthenticated") {
      router.push("/auth/login");
      return;
    }
  
    return status === "loading" ? (
      <LoaderFull />
    ) : (
      <section className={"flex min-h-screen"}>
        <section
          className={`z-10 top-0 left-0 lg:relative transition duration-300 ease-in-out fixed bg-red-400 lg:translate-x-0 ${
            menuState ? " translate-x-0" : " -translate-x-full "
          }`}
        >
          <section className="sticky top-0">
            <NavbarAdmin onClickHandle={onClickBars} />
          </section>
        </section>
  
        <section
          className={`w-full lg:w-[calc(100%-256px)] relative bg-gray-100 dark:bg-gray-800/90 transition duration-300 ease-in-out lg:translate-x-0 ${
            menuState ? " translate-x-0" : " -translate-x-0 "
          }`}
          onTouchStart={() => {
            if (menuState) onClickBars();
          }}
        >
          <section className=" bg-white h-16 p-2 box-content mb-5 shadow-md sticky top-0 z-10 dark:bg-gray-800">
            <NavbarAdminTop onClickBars={() => onClickBars()} />
          </section>
        
  
          <section className=" bg-white dark:bg-gray-800/60 m-2 py-3 lg:m-4 lg:py-5 rounded-xl shadow-md overflow-x-clip ">
            <main>{children}</main>
          </section>
  
          <section className="mb-28">
            <FooterAdmin />
          </section>
        </section>
  
        <section>
          {/* <Toast /> */}
        </section>
      </section>
    );
};

export default LayoutAdmin;
