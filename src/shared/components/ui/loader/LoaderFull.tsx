import Logo from "@/assets/logos/logo.png";
import Image from "next/image";

import Styles from "./loader.module.scss";

const LoaderFull = () => {
  return (
    <div className={`${Styles.loaderFull__container}`}>
      <figure>
        <Image src={Logo} alt="Logo Nuquí tours" priority={true} unoptimized={true} />
      </figure>
    </div>
  );
}

export default LoaderFull;
