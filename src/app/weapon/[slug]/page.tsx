"use server";

import { Metadata } from "next";

import WeaponClient from "~/components/weapon/weaponClient";
import { getWeaponById } from "~/services/teyvatServer/teyvatArchive.service";
import { IWeapon } from "~/types/enka/weapon.types";
import { decryptWeaponUniqueRoute } from "~/utils/decryptUniqueId";

async function fetchWeapon(slug: string) {
  const { weaponId } = decryptWeaponUniqueRoute(slug);

  const weapon: IWeapon = await getWeaponById(weaponId);

  return weapon;
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const weapon = await fetchWeapon(slug);

  return {
    title: `Teyvat Archive - ${weapon.name}`,
    description: `Artifact Set: ${weapon.name}`,
    keywords: `Teyvat Archive, Genshin Impact, Teyvat, Genshin, Impact, Weapon, ${weapon.name}`
  };
}

export default async function Weapon({
  params
}: Readonly<{ params: Promise<{ slug: string }> }>) {
  const { slug } = await params;

  const weapon = await fetchWeapon(slug);

  return <WeaponClient {...{ weapon }} />;
}
