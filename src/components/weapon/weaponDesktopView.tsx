import { useState } from "react";

import { IWeapon } from "~/types/enka/weapon.types";
import rarityBgPicker from "~/utils/rarityBgPicker";

import TabNavigation from "../common/basic/tabNavigation";
import LazyBackgroundImage from "../common/lazyBackgroundImage";

import WeaponProfileDesktop from "./weaponProfile/weaponProfileDesktop";
import WeaponRefinementDesktop from "./weaponRefinement/weaponRefinementDesktop";
import WeaponStatsDesktop from "./weaponStats/weaponStatsDesktop";

type Props = {
  weapon: IWeapon;
};

function WeaponDesktopView({ weapon }: Readonly<Props>) {
  const { stars, stats, refinements } = weapon;

  const TAB_NAV = [
    {
      name: "Refinement",
      id: "refinement",
      shouldDisplay: stars > 2
    },
    {
      name: "Stats",
      id: "stats",
      isActive: true,
      shouldDisplay: true
    }
  ];

  const [selectedTab, setSelectedTab] = useState(TAB_NAV[stars > 2 ? 0 : 1].id);

  return (
    <div className="hidden w-full max-w-[1650px] flex-col items-center justify-start space-y-8 overflow-hidden px-12 py-4 xl:flex">
      <LazyBackgroundImage
        img={rarityBgPicker(stars)}
        isDarkened
        className="hidden w-full flex-col items-start justify-start rounded-4xl p-10 xl:flex xl:h-[650px]"
      >
        <WeaponProfileDesktop {...{ weapon }} />
      </LazyBackgroundImage>

      <div
        className="mt-8 flex w-full items-start justify-between space-x-4 rounded-lg"
        style={{ backgroundColor: "rgba(16, 24, 40, 0.7)" }}
      >
        <TabNavigation
          tabs={TAB_NAV}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
        {/* tab content */}
        <div className="w-full">
          <div className="px-4 pb-6">
            {selectedTab === "refinement" && stars > 2 && (
              <WeaponRefinementDesktop {...{ refinements }} />
            )}
            {selectedTab === "stats" && (
              <WeaponStatsDesktop {...{ stars, stats }} />
            )}
          </div>
        </div>
        {/* tab content ends */}
      </div>
    </div>
  );
}

export default WeaponDesktopView;
