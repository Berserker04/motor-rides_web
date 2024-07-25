import { Button, Label, TextInput } from "flowbite-react";
import React from "react";

import DefaultProfile from "@/assets/images/defaultProfile.png";
import Image from "next/image";

const ProfileAccount = () => {
  return (
    <form className="flex max-w-md flex-col gap-4 dark:text-gray-100">
      <div>
        <p className="mb-3">Foto:</p>
        <Image src={DefaultProfile} alt="foto perfil" height={80} priority />
      </div>
      <div>
        <p className="mb-3">Perfil:</p>
        <div className="mb-2 block">
          <Label htmlFor="currentPassword" value="Nombre completo" />
        </div>
        <TextInput value={"test"} disabled required shadow type="text" />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password2" value="Correo eléctronico" />
        </div>
        <TextInput value={"test@gmail.com"} disabled required shadow type="email" />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="repeat-password" value="Rol" />
        </div>
        <TextInput value={"Admin"} disabled required shadow type="text" />
      </div>
      {/* <Button type="submit">Guardar cambios</Button> */}
    </form>
  );
};

export default ProfileAccount;
