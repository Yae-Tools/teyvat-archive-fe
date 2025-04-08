"use client";

import {
  useAllWeaponData,
  useAllWeaponSeriesData
} from "~/hooks/weapon/useWeaponData";

import PageTitle from "../common/typography/pageTitle";
import ShowcaseFilterContainer from "../layout/container/showcaseFilterContainer";

import AllWeaponShowcase from "./allWeaponShowcase";
import WeaponFilterSection from "./filtering/weaponFilterSection";

export default function WeaponsClient() {
  const { data: weapons } = useAllWeaponData();
  const { data: weaponSeries } = useAllWeaponSeriesData();

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
