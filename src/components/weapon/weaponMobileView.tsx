import { IWeapon } from "~/types/enka/weapon.types";
import WeaponMobileOverview from "./weaponOverview/weaponMobileOverview";
import WeaponProfileMobile from "./weaponProfile/weaponProfileMobile";
import WeaponRefinementMobile from "./weaponRefinement/weaponRefinementMobile";
import WeaponStatsMobile from "./weaponStats/weaponStatsMobile";

type Props = {
  weapon: IWeapon;
};

export default function WeaponMobileView({ weapon }: Readonly<Props>) {
  const {
    refinements,
    splashImage,
    name,
    stars,
    description,
    weaponType,
    stats,
  } = weapon;

  return (
    <div className="pt-2 md:p-10 px-2 xl:hidden w-full">
      <WeaponProfileMobile {...{ splashImage, name, stars }} />
      <WeaponMobileOverview {...{ stars, description, stats, weaponType }} />
      {stars > 2 && <WeaponRefinementMobile {...{ refinements }} />}
      <WeaponStatsMobile {...{ stats, stars }} />
    </div>
  );
}
