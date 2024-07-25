"use client";

import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";

import Styles from "./_styles.module.scss";
import ProfilePassword from "./components/ProfilePassword";
import ProfileAccount from "./components/ProfileAccount";

export default function ProfilePage() {
  return (
    <div className="">
      <Tabs
        aria-label="Tabs with underline"
        style="underline"
        className={`${Styles.buttonTap} px-5`}
      >
        <Tabs.Item active icon={HiUserCircle} title="Perfil">
          <ProfileAccount />
        </Tabs.Item>
        {/* <Tabs.Item icon={HiAdjustments} title="Contraseña">
        <ProfilePassword />
      </Tabs.Item> */}
      </Tabs>
    </div>
  );
}
