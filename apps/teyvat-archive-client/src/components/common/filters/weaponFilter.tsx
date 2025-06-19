import Image from "next/image";
import { memo } from "react";

import { WEAPONS_ARRAY } from "~/data/teyvatData";
import { IWeaponType } from "~/types/enka/enka.types";
import { weaponTypeIconFilter } from "~/utils/weaponIconFilter";

import ItemSeparator from "./itemSeparator";

type Props = {
  selectedWeapon: IWeaponType | null;
  setSelectedWeapon: (weapon: IWeaponType | null) => void;
};

function WeaponFilter({ selectedWeapon, setSelectedWeapon }: Readonly<Props>) {
  return (
    <div className="mb-3 flex h-[40px] w-full max-w-[300px] items-center justify-between rounded-lg border-2 border-slate-600 p-2 lg:w-max">
      {/* map weapons and add separators in between them */}
      {WEAPONS_ARRAY.map((weapon, index) => (
        <div key={weapon} className="flex items-center">
          <button
            onClick={() => {
              if (selectedWeapon === weapon) {
                setSelectedWeapon(null);
              } else {
                setSelectedWeapon(weapon);
              }
            }}
            className="mx-2 cursor-pointer"
          >
            <Image
              src={weaponTypeIconFilter[weapon]}
              alt={weapon}
              className="w-[30px]"
              style={{
                filter:
                  selectedWeapon === weapon || !selectedWeapon
                    ? "brightness(0) invert(1)"
                    : ""
              }}
            />
          </button>
          {index !== WEAPONS_ARRAY.length - 1 && <ItemSeparator />}
        </div>
      ))}
    </div>
  );
}

export default memo(WeaponFilter);
