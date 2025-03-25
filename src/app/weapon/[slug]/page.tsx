"use server";

import WeaponClient from "~/components/weapon/weaponClient";
import {
  getWeaponById,
  getWeapons,
} from "~/services/teyvatServer/teyvatArchive.service";
import { decryptWeaponUniqueRoute } from "~/utils/decryptUniqueId";

export async function generateStaticParms() {
  const weapons: IBaseWeapon[] = await getWeapons();
  return {
    paths: weapons.map((weapon) => ({
      params: {
        slug: weapon.id,
      },
    })),
  };
}

export default async function Weapon({
  params,
}: Readonly<{ params: Promise<{ slug: string }> }>) {
  const { slug } = await params;
  const { weaponId } = decryptWeaponUniqueRoute(slug);

  const weapon: IWeapon = await getWeaponById(weaponId);

  return <WeaponClient {...{ weapon }} />;
}
