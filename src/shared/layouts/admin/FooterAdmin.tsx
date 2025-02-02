const FooterAdmin = () => {
  return (
    <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-gray-800  border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
      <p className="text-sm text-gray-100 sm:text-center dark:text-gray-100">
        © 2023{" "}
        <a href="https://www.nuquitours.com.co/" className="hover:underline">
          Nuquí Tours
        </a>
        . Todos los derechos recervados.
      </p>
      {/* <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6">
            About
          </a>
        </li>
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6">
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6">
            Licensing
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </li>
      </ul> */}
    </footer>
  );
};

export default FooterAdmin;
