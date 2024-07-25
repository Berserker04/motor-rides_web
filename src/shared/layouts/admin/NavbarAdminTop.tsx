"use client";

import { signOut } from "next-auth/react";
import Image from "next/image";
import React, { useState } from "react";

const NavbarAdminTop = ({ onClickBars }: any) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [themeState, setThemeState] = useState(false);

  const changeTheme = () => {
    document?.documentElement.classList.toggle("dark");
    setThemeState(!themeState);
  };

  return (
    <section className="w-full h-full flex justify-between items-center px-6 static dark:text-gray-100">
      <button title="..." className="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="lg:hidden w-6 h-6"
          onClick={onClickBars}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <section className="h-full flex items-center gap-6">
        {/* <button  className="bg-blue-500 text-white px-4 py-2 rounded">Cambiar Tema</button> */}
        <button
          onClick={changeTheme}
          type="button"
          className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-blue-400 rounded-full hover:bg-blue-800  dark:bg-blue-400 dark:hover:bg-blue-500 "
        >
          {themeState ? (
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-11a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Zm0 12a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1ZM4.343 5.757a1 1 0 0 0 1.414-1.414L4.343 2.929a1 1 0 0 0-1.414 1.414l1.414 1.414Zm11.314 8.486a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM4 10a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1Zm15-1h-2a1 1 0 1 0 0 2h2a1 1 0 0 0 0-2ZM4.343 14.243l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414a1 1 0 0 0-1.414-1.414ZM14.95 6.05a1 1 0 0 0 .707-.293l1.414-1.414a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 .707 1.707Z" />
            </svg>
          ) : (
            <svg
              className="w-6 h-6 text-white dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 20"
            >
              <path d="M17.8 13.75a1 1 0 0 0-.859-.5A7.488 7.488 0 0 1 10.52 2a1 1 0 0 0 0-.969A1.035 1.035 0 0 0 9.687.5h-.113a9.5 9.5 0 1 0 8.222 14.247 1 1 0 0 0 .004-.997Z" />
            </svg>
          )}
        </button>
        <button
          type="button"
          className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-blue-400 rounded-full hover:bg-blue-800  dark:bg-blue-400 dark:hover:bg-blue-500 "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1.5em"
            viewBox="0 0 512 512"
            fill="currentColor"
          >
            <path d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z" />
          </svg>
          <span className="sr-only">Emails</span>
          <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-400 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
            20
          </div>
        </button>
        <button
          type="button"
          className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-blue-400 rounded-full hover:bg-blue-800  dark:bg-blue-400 dark:hover:bg-blue-500 "
        >
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 16"
          >
            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
          </svg>
          <span className="sr-only">Emails</span>
          <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-400 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
            20
          </div>
        </button>

        {/* <div className="rounded-full drop-shadow-md bg-blue-300 h-full w-16 grid place-content-center">
          Adriano
        </div> */}

        <section className="flex items-center h-full">
          <section className="flex items-center ml-3 flex-col h-full relative">
            <button
              onFocus={() => setActiveMenu(false)}
              onBlur={() =>
                setTimeout(() => {
                  setActiveMenu(true);
                }, 500)
              }
              type="button"
              className="flex text-sm drop-shadow-md h-full bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              aria-expanded="false"
              data-dropdown-toggle="dropdown-user"
            >
              <span className="sr-only">Open user menu</span>
              <Image
                className=" h-16 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                alt="user photo"
                width={65}
                height={10}
              />
            </button>
            <section
              className={`${
                activeMenu && "hidden"
              } z-50 top-12 right-0 my-4 absolute text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600`}
              id="dropdown-user"
            >
              <section className="px-4 py-3" role="none">
                <p
                  className="text-sm text-gray-900 dark:text-white"
                  role="none"
                >
                  Neil Sims
                </p>
                <p
                  className="text-sm font-medium text-gray-900 truncate dark:text-gray-300 line-clamp w-44"
                  role="none"
                >
                  neil.sims@flowbite.com
                </p>
              </section>
              <ul className="py-1" role="none">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                    // role="menuitem"
                  >
                    Perfil
                  </a>
                </li>
                <li>
                  <button
                    onClick={() =>
                      signOut({
                        callbackUrl: "/auth/login",
                        redirect: true,
                      })
                    }
                    className="block w-full px-4 py-2 text-sm text-start text-gray-700 hover:bg-red-100 dark:text-gray-300 dark:hover:bg-red-600 dark:hover:text-white"
                    // role="menuitem"
                  >
                    Salir
                  </button>
                </li>
              </ul>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
};

export default NavbarAdminTop;
