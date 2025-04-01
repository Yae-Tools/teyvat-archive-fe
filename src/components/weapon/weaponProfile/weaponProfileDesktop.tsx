import { memo } from "react";

import RarityStars from "~/components/common/rarityStars";
import TitleHeading from "~/components/common/typography/titleHeading";
import WeaponOverviewDesktop from "../weaponOverview/weaponOverviewDesktop";
import { IWeapon } from "~/types/enka/weapon.types";

type Props = {
  weapon: IWeapon;
};

function WeaponProfileDesktop({ weapon }: Readonly<Props>) {
  const { name, stars, splashImage, description, stats, series, weaponType } =
    weapon;

  return (
    <>
      <div className="flex w-full m-2 items-start justify-between">
        <div className="w-1/3 flex flex-col items-start mx-2">
          <div className="flex items-center justify-start space-x-1 mb-2">
            <RarityStars stars={stars} />
          </div>
        </div>
        <div className="w-2/3 flex flex-col items-end mx-2 justify-end">
          <div className="flex w-full items-center justify-end space-x-1 mb-2 text-right">
            <TitleHeading text={name} />
          </div>
        </div>
      </div>
      <div className="w-full flex mx-2 relative h-full">
        <div className="w-1/3 flex flex-col items-start mx-2 ">
          <img
            src={splashImage}
            alt={name}
            className="absolute bottom-10 left-20"
            style={{
              height: "100%",
              scale: "1.8",
              rotate: "25deg",
            }}
          />
        </div>
        <WeaponOverviewDesktop
          {...{
            description,
            stars,
            stats,
            series,
            weaponType,
          }}
        />
      </div>
    </>
  );
}

export default memo(WeaponProfileDesktop);
