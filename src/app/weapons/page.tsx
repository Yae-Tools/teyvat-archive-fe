"use server";

import { Metadata } from "next";

import PageTitle from "~/components/common/typography/pageTitle";
import ShowcaseFilterContainer from "~/components/layout/container/showcaseFilterContainer";
import AllWeaponShowcase from "~/components/weapons/allWeaponShowcase";
import WeaponFilterSection from "~/components/weapons/filtering/weaponFilterSection";
import {
  getWeapons,
  getWeaponSeries
} from "~/services/teyvatServer/teyvatArchive.service";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Teyvat Archive - Weapons",
    description: "Teyvat Archive - Weapons",
    keywords: "Teyvat Archive, Genshin Impact, Teyvat, Genshin, Impact, Weapons"
  };
}

export default async function Weapons() {
  const [weapons, weaponSeries] = await Promise.all([
    getWeapons(),
    getWeaponSeries()
  ]);

  return (
    <>
      <ShowcaseFilterContainer isSticky>
        <div className="mt-3 flex w-full items-center justify-center xl:mb-4">
          <PageTitle title="Teyvat Weapons" />
        </div>
        <WeaponFilterSection weaponSeries={weaponSeries} />
      </ShowcaseFilterContainer>
      <AllWeaponShowcase weapons={weapons} />
    </>
  );
}
