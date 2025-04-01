import { memo } from "react";

import { WEAPONS_ARRAY } from "~/data/teyvatData";
import { weaponTypeIconFilter } from "~/utils/weaponIconFilter";
import ItemSeparator from "./itemSeparator";
import Image from "next/image";
import { IWeaponType } from "~/types/enka/enka.types";

type Props = {
  selectedWeapon: IWeaponType | null;
  setSelectedWeapon: (weapon: IWeaponType | null) => void;
};

function WeaponFilter({ selectedWeapon, setSelectedWeapon }: Readonly<Props>) {
  return (
    <div className="w-full lg:w-max flex items-center justify-between p-2 mb-3 max-w-[300px] border-2 border-slate-600 rounded-lg h-[40px]">
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
            className="cursor-pointer mx-2"
          >
            <Image
              src={weaponTypeIconFilter[weapon]}
              alt={weapon}
              className="w-[30px]"
              style={{
                filter:
                  selectedWeapon === weapon || !selectedWeapon
                    ? "brightness(0) invert(1)"
                    : "",
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
