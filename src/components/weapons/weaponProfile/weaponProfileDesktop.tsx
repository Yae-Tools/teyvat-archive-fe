import { memo } from "react";

import RarityStars from "~/components/common/rarityStars";
import TitleHeading from "~/components/common/typography/titleHeading";
import { IWeapon } from "~/types/enka/weapon.types";

import WeaponOverviewDesktop from "../weaponOverview/weaponOverviewDesktop";

type Props = {
  weapon: IWeapon;
};

function WeaponProfileDesktop({ weapon }: Readonly<Props>) {
  const { name, stars, splashImage, description, stats, series, weaponType } =
    weapon;

  return (
    <>
      <div className="m-2 flex w-full items-start justify-between">
        <div className="mx-2 flex w-1/3 flex-col items-start">
          <div className="mb-2 flex items-center justify-start space-x-1">
            <RarityStars stars={stars} />
          </div>
        </div>
        <div className="mx-2 flex w-2/3 flex-col items-end justify-end">
          <div className="mb-2 flex w-full items-center justify-end space-x-1 text-right">
            <TitleHeading text={name} />
          </div>
        </div>
      </div>
      <div className="relative mx-2 flex h-full w-full">
        <div className="mx-2 flex w-1/3 flex-col items-start">
          <img
            src={splashImage}
            alt={name}
            className="absolute bottom-10 left-20"
            style={{
              height: "100%",
              scale: "1.8",
              rotate: "25deg"
            }}
          />
        </div>
        <WeaponOverviewDesktop
          {...{
            description,
            stars,
            stats,
            series,
            weaponType
          }}
        />
      </div>
    </>
  );
}

export default memo(WeaponProfileDesktop);
