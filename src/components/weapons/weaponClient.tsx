"use client";

import { useMediaQuery } from "react-responsive";

import { IWeapon } from "~/types/enka/weapon.types";

import WeaponDesktopView from "./weaponDesktopView";
import WeaponMobileView from "./weaponMobileView";

type Props = {
  weapon: IWeapon;
};

export default function WeaponClient({ weapon }: Readonly<Props>) {
  const isXl = useMediaQuery({ minWidth: 1280 });
  return (
    <>
      {isXl ? (
        <WeaponDesktopView {...{ weapon }} />
      ) : (
        <WeaponMobileView {...{ weapon }} />
      )}
    </>
  );
}
