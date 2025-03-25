"use server";

import PageTitle from "~/components/common/typography/pageTitle";
import ShowcaseFilterContainer from "~/components/layout/container/showcaseFilterContainer";
import AllWeaponShowcase from "~/components/weapons/allWeaponShowcase";
import WeaponFilterSection from "~/components/weapons/filtering/weaponFilterSection";
import {
  getWeapons,
  getWeaponSeries,
} from "~/services/teyvatServer/teyvatArchive.service";

export default async function Weapons() {
  const [weapons, weaponSeries] = await Promise.all([
    getWeapons(),
    getWeaponSeries(),
  ]);

  return (
    <>
      <ShowcaseFilterContainer isSticky>
        <div className="w-full flex items-center justify-center xl:mb-4 mt-3">
          <PageTitle title="Teyvat Weapons" />
        </div>
        <WeaponFilterSection weaponSeries={weaponSeries} />
      </ShowcaseFilterContainer>
      <AllWeaponShowcase weapons={weapons} />
    </>
  );
}
