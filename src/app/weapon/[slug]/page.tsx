"use server";

import WeaponClient from "~/components/weapon/weaponClient";
import { getWeaponById } from "~/services/teyvatServer/teyvatArchive.service";
import { decryptWeaponUniqueRoute } from "~/utils/decryptUniqueId";

export default async function Weapon({
  params,
}: Readonly<{ params: Promise<{ slug: string }> }>) {
  const { slug } = await params;
  const { weaponId } = decryptWeaponUniqueRoute(slug);

  const weapon: IWeapon = await getWeaponById(weaponId);

  return <WeaponClient {...{ weapon }} />;
}
