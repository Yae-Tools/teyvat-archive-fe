import Image from "next/image";

import OverviewItemHolder from "~/components/common/overviewItemHolder";
import { WEAPON_TYPES } from "~/data/teyvatData";
import { IBirthday, ICharacterLocation } from "~/types/enka/character.types";
import { IElementType, IWeaponType } from "~/types/enka/enka.types";
import { getElementTypeImage } from "~/utils/elementalImagePicker";
import birthdayFormatter from "~/utils/formatters/birthday.formatter";
import characterLocationParser from "~/utils/parsers/characterLocationParser";
import { weaponTypeIconFilter } from "~/utils/weaponIconFilter";

type Props = {
  element: IElementType;
  weapon: IWeaponType;
  affiliation: ICharacterLocation;
  description: string;
  birthday: IBirthday | null;
  isTraveler: boolean;
};

export default function CharacterMobileOverview({
  element,
  weapon,
  affiliation,
  description,
  birthday,
  isTraveler
}: Readonly<Props>) {
  return (
    <div className="bg-opacity-50 mt-2 flex w-full flex-col items-center justify-center rounded-lg bg-slate-200 p-4 shadow-md xl:hidden dark:bg-slate-800">
      <p
        className="mb-4 w-full text-sm text-slate-400 italic md:text-base lg:text-lg"
        style={{
          lineHeight: "1rem"
        }}
      >
        "{description}"
      </p>
      <div className="flex w-full items-start justify-between">
        <OverviewItemHolder label="Element" value={element}>
          <Image
            className="mr-2 size-5"
            src={getElementTypeImage(element)}
            alt={element}
          />
        </OverviewItemHolder>
        <OverviewItemHolder label="Weapon Type" value={WEAPON_TYPES[weapon]}>
          <Image
            className="mr-2 size-6"
            src={weaponTypeIconFilter[weapon]}
            alt={weapon}
            style={{
              filter: "brightness(0) invert(1)"
            }}
          />
        </OverviewItemHolder>
      </div>
      <div className="mt-4 flex w-full items-start justify-between">
        <OverviewItemHolder
          label="Affiliation"
          value={characterLocationParser(affiliation, isTraveler)}
        />
        <OverviewItemHolder
          label="Birthday"
          value={birthday ? `${birthdayFormatter(birthday)}` : "Unknown"}
        />
      </div>
    </div>
  );
}
