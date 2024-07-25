"use client";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import Link from "next/link";

export default function ProfilePassword() {
  return (
    <form className="flex max-w-md flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="currentPassword" value="Contraseña actual" />
        </div>
        <TextInput
          id="currentPassword"
          placeholder="********"
          required
          shadow
          type="password"
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password2" value="Nueva contraseña" />
        </div>
        <TextInput
          id="password2"
          placeholder="********"
          required
          shadow
          type="password"
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="repeat-password" value="Confirmar contraseña" />
        </div>
        <TextInput
          id="repeat-password"
          placeholder="********"
          required
          shadow
          type="password"
        />
      </div>
      <Button type="submit">Guardar cambios</Button>
    </form>
  );
}
