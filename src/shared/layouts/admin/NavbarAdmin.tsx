"use client"

import Link from "next/link";
import { MouseEventHandler } from "react";

import Logo from "@/assets/logos/logo.png";
import Image from "next/image";
import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import {
  FaAngleDown,
  FaArrowUpFromWaterPump,
  FaEnvelope,
  FaGear,
  FaHouse,
  FaHouseFloodWater,
  FaStore,
  FaUser,
} from "react-icons/fa6";

const NavbarAdmin = ({
  onClickHandle,
}: {
  onClickHandle: MouseEventHandler<HTMLAnchorElement> | undefined;
}) => {
  const pathname = usePathname();
  // const isActive = pathname.startsWith(url);

  const classLink = (url: string) =>
    `flex items-center gap-2 rounded-lg px-4 py-2 hover:bg-slate-600 hover:text-gray-100 ${
      pathname === url ? "bg-slate-500 text-gray-100" : "text-slate-300"
    }`;

  return (
    <nav className={`bg-gray-800 text-white w-64 p-4 h-screen overflow-y-auto`}>
      <figure className="grid p-3 place-items-center h-36">
        <Image
          src={Logo}
          alt="logo"
          height={100}
          className="rounded-lg"
          priority
        />
      </figure>
      <ul className="space-y-1">
        <li>
          <Link
            href="/dashboard"
            className={classLink("/dashboard")}
            onClick={onClickHandle}
          >
            <FaHouse size={20} />
            <span className="text-sm font-medium text-cyan-600"> Dashboard </span>
          </Link>
        </li>

        {/* <li>
          <Link
            href="/dashboard/emails"
            className={classLink("/dashboard/emails")}
            onClick={onClickHandle}
          >
            <FaEnvelope size={20} />
            <span className={`text-sm font-medium `}> Emails </span>
          </Link>
        </li> */}
        <li>
          <Link
            href="/dashboard/ventas"
            className={classLink("/dashboard/ventas")}
            onClick={onClickHandle}
          >
            <FaStore size={20} />
            <span className="text-sm font-medium"> Ventas </span>
          </Link>
        </li>
        <li>
          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary
              //  className="group flex items-center justify-between rounded-lg px-4 py-2 hover:bg-gray-100 text-slate-300  hover:text-gray-700 "
              className={`cursor-pointer group flex items-center justify-between rounded-lg px-4 py-2 hover:bg-slate-600 hover:text-gray-100 ${
                pathname.startsWith("/dashboard/servicios")
                  ? "bg-slate-500 "
                  : "text-slate-300"
              }`}
            >
              <div className="flex items-center gap-2 ">
                <FaHouseFloodWater size={20} />
                <span className="text-sm font-medium "> Servicios </span>
              </div>

              <div className="shrink-0 transition duration-300 group-open:-rotate-180">
                <FaAngleDown size={15} />
              </div>
            </summary>

            <ul className="mt-2 space-y-1 px-4">
              <li>
                <Link
                  href="/dashboard/servicios/productos"
                  className={classLink("/dashboard/servicios/productos")}
                  onClick={onClickHandle}
                >
                  Productos
                </Link>
              </li>

              {/* <li>
                <Link
                  href="/dashboard/servicios/hoteles"
                  className={classLink("/dashboard/servicios/hoteles")}
                  onClick={onClickHandle}
                >
                  Hoteles
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/servicios/actividades"
                  className={classLink("/dashboard/servicios/actividades")}
                  onClick={onClickHandle}
                >
                  Actividades
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/servicios/paquetes"
                  className={classLink("/dashboard/servicios/paquetes")}
                  onClick={onClickHandle}
                >
                  Paquetes
                </Link>
              </li>

              <li>
                <Link
                  href="/dashboard/servicios/hoteles"
                  className={classLink("/dashboard/servicios/hoteles")}
                  onClick={onClickHandle}
                >
                  Hoteles
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/servicios/actividades"
                  className={classLink("/dashboard/servicios/actividades")}
                  onClick={onClickHandle}
                >
                  Actividades
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/servicios/paquetes"
                  className={classLink("/dashboard/servicios/paquetes")}
                  onClick={onClickHandle}
                >
                  Paquetes
                </Link>
              </li>

              <li>
                <Link
                  href="/dashboard/servicios/hoteles"
                  className={classLink("/dashboard/servicios/hoteles")}
                  onClick={onClickHandle}
                >
                  Hoteles
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/servicios/actividades"
                  className={classLink("/dashboard/servicios/actividades")}
                  onClick={onClickHandle}
                >
                  Actividades
                </Link>
              </li> */}
            </ul>
          </details>
        </li>
        <li>
          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary
              //  className="group flex items-center justify-between rounded-lg px-4 py-2 hover:bg-gray-100 text-slate-300  hover:text-gray-700 "
              className={`cursor-pointer group flex items-center justify-between rounded-lg px-4 py-2 hover:bg-slate-600 hover:text-gray-100 ${
                pathname.startsWith("/dashboard/configuraciones")
                  ? "bg-slate-500 "
                  : "text-slate-300"
              }`}
            >
              <div className="flex items-center gap-2 ">
                <FaGear size={20} />
                <span className="text-sm font-medium "> Configuración </span>
              </div>

              <div className="shrink-0 transition duration-300 group-open:-rotate-180">
                <FaAngleDown size={15} />
              </div>
            </summary>

            <ul className="mt-2 space-y-1 px-4">
              <li>
                <Link
                  href="/dashboard/configuraciones/subcategorias"
                  className={classLink("/dashboard/configuraciones/subcategorias")}
                  onClick={onClickHandle}
                >
                  Subcategoria
                </Link>
              </li>

              <li>
                <Link
                  href="/dashboard/configuraciones/categorias"
                  className={classLink("/dashboard/configuraciones/categorias")}
                  onClick={onClickHandle}
                >
                  Categorias
                </Link>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary
              className={`cursor-pointer group flex items-center justify-between rounded-lg px-4 py-2 hover:bg-slate-600 hover:text-gray-100 ${
                pathname.startsWith("/dashboard/perfil")
                  ? "bg-slate-500 "
                  : "text-slate-300"
              }`}
            >
              <div className="flex items-center gap-2">
                <FaUser size={20} />
                <span className="text-sm font-medium">Cuenta</span>
              </div>

              <div className="shrink-0 transition duration-300 group-open:-rotate-180">
                <FaAngleDown size={15} />
              </div>
            </summary>

            <ul className="mt-2 space-y-1 px-4">
              <li>
                <Link
                  href="/dashboard/perfil"
                  className={classLink("/dashboard/perfil")}
                  onClick={onClickHandle}
                >
                  Perfil
                </Link>
              </li>

              {/* <li>
                <Link
                  href=""
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-slate-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  Security
                </Link>
              </li> */}

              <li>
                <form action="/logout">
                  <button
                    onClick={() =>
                      signOut({
                        callbackUrl: "/auth/login",
                        redirect: true,
                      })
                    }
                    type="button"
                    className="w-full rounded-lg px-4 py-2 text-sm font-medium text-slate-300 text-gray-500 [text-align:_inherit] hover:bg-red-300 hover:text-gray-700"
                  >
                    Salir
                  </button>
                </form>
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarAdmin;
