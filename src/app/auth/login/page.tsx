"use client";

import { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/logos/logo.png";

// import Logo from "@/assets/images/logo.jpg";

// import { useUserStore } from "@/store/user.store";

interface ILogin {
  email: string;
  password: string;
  rememberMe: boolean;
}

const initialForm: ILogin = {
  email: "admin@gmail.com",
  password: "password", //password
  rememberMe: false,
};

const LoginPage = () => {
  const [form, setForm] = useState<ILogin>(initialForm);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  //   const { setUser } = useUserStore();
  const router = useRouter();
  const { data: session }: any = useSession();

  const handleChange = ({ name, value }: EventTarget & HTMLInputElement) => {
    setForm({ ...form, [name]: value });
  };

  const sendForm = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    console.log(form);
    const res = await signIn("credentials", { ...form, redirect: false });
    console.log(res);
    if (!res?.error) {
      return router.push("/dashboard");
    }
    setError(true);
    setLoading(false);

    setTimeout(() => {
      setError(false);
    }, 3000);
  };

  //   useEffect(() => {
  // const resetError = setTimeout(() => {
  //   setError(false);
  // }, 3000);
  // return () => {
  //   clearTimeout(resetError);
  // };
  //     localStorage.setItem("token", session?.user?.token);
  //     setUser({ user: session?.user, token: session?.user?.token });
  //   }, [session, setUser]);

  return (
    <div className="h-screen flex items-center p-2 bg-[#03091E] bg-cover">
      <div className="flex items-center justify-center w-screen h-screen flex-col bg-[#00000030]">
        <Link href={"/"}>
          <Image src={logo} alt="as" height={150} className="rounded-full" />
        </Link>
        <form
          onSubmit={sendForm}
          className="max-w-lg w-[50rem]  mx-auto bg-[#00000090] p-8 m-4 rounded-lg flex flex-col"
        >
          <h2 className="text-white text-2xl text-center font-bold">
            Iniciar sesión
          </h2>
          <br />
          <br />
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Correo
            </label>
            <input
              value={form.email}
              onChange={(e) => handleChange(e.target)}
              disabled={loading}
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@example.com"
              required
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Contraseña
            </label>
            <input
              name="password"
              type="password"
              value={form.password}
              onChange={(e) => handleChange(e.target)}
              disabled={loading}
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              placeholder="********"
            />
          </div>
          {/* <div className="flex items-start mb-5">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              required
              placeholder="recordarme"
            />
          </div>
          <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Recordarme
          </label>
        </div> */}
          {/* <button
            disabled={loading}
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Ingresar
          </button> */}
          {loading ? (
            <button
              disabled={loading}
              type="submit"
              className="text-center py-2.5 px-5 me-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 flex items-center justify-center"
            >
              <svg
                aria-hidden="true"
                role="status"
                className="inline w-4 h-4 me-3 text-white animate-spin"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="#E5E7EB"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentColor"
                />
              </svg>
              Ingresando...
            </button>
          ) : (
            <button
              disabled={loading}
              type="submit"
              className="text-white flex bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 justify-center"
            >
              Ingresar
            </button>
          )}

          <br />
          {error && (
            <>
              <hr />
              <p className="text-red-300 text-sm text-center">
                Correo o contraseña incorrecto.
              </p>
            </>
          )}
        </form>
      </div>
    </div>
    // <section>
    //   <form className={""} onSubmit={sendForm}>
    //     <Link href={"/"}>
    //       <figure className={""}>
    //         {/* <Image
    //           src={Logo}
    //           alt="Logo Nuquí tours"
    //           priority
    //           unoptimized={true}
    //         /> */}
    //       </figure>
    //     </Link>

    //     <h3>Iniciar sesión</h3>

    //     <section className={""}>
    //       <div className="relative w-full">
    //         <input
    //           required
    //           name="email"
    //           value={form.email}
    //           onChange={(e) => handleChange(e.target)}
    //           disabled={loading}
    //           type="email"
    //           id="email"
    //           className=" block px-2.5 pb-2.5 pt-4 w-full text-sm  bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer border"
    //           placeholder=" "
    //         />
    //         <label
    //           htmlFor="email"
    //           className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
    //         >
    //           Correo electrónico
    //         </label>
    //       </div>
    //       <div className="relative w-full">
    //         <input
    //           required
    //           name="password"
    //           type="password"
    //           value={form.password}
    //           onChange={(e) => handleChange(e.target)}
    //           disabled={loading}
    //           id="password"
    //           className=" block px-2.5 pb-2.5 pt-4 w-full text-sm  bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer border"
    //           placeholder=" "
    //         />
    //         <label
    //           htmlFor="password"
    //           className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
    //         >
    //           Contraseña
    //         </label>
    //       </div>

    //       <Link href={"/password/code"}>¿Olvidaste tu contraseña?</Link>

    //       {/* <Checkbox
    //         name="rememberMe"
    //         label="Recordar me"
    //         change={handleChange}
    //       /> */}

    //       {loading ? (
    //         <button
    //           disabled
    //           type="button"
    //           className="px-5 py-3 text-lg font-medium leading-none text-center  bg-blue-500 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200"
    //         >
    //           Validando...
    //         </button>
    //       ) : (
    //         <button
    //           type="submit"
    //           className="px-5 py-3 text-lg font-medium leading-none text-center hover:bg-blue-600  bg-blue-500 rounded-full dark:bg-blue-600 dark:text-gray-100"
    //         >
    //           Ingresar
    //         </button>
    //       )}

    //       <hr />
    //       {error && (
    //         <p className="text-red-300 text-sm">
    //           Correo o contraseña incorrecto.
    //         </p>
    //       )}
    //     </section>
    //   </form>
    // </section>
  );
};

export default LoginPage;
