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
  isTraveler,
}: Readonly<Props>) {
  return (
    <div className="mt-2 bg-slate-200 dark:bg-slate-800 bg-opacity-50 flex flex-col items-center justify-center p-4 rounded-lg shadow-md w-full xl:hidden">
      <p
        className="text-sm md:text-base lg:text-lg mb-4 italic w-full text-slate-400"
        style={{
          lineHeight: "1rem",
        }}
      >
        "{description}"
      </p>
      <div className="flex w-full justify-between items-start">
        <OverviewItemHolder label="Element" value={element}>
          <Image
            className="w-5 h-5 mr-2"
            src={getElementTypeImage(element)}
            alt={element}
          />
        </OverviewItemHolder>
        <OverviewItemHolder label="Weapon Type" value={WEAPON_TYPES[weapon]}>
          <Image
            className="w-6 h-6 mr-2"
            src={weaponTypeIconFilter[weapon]}
            alt={weapon}
            style={{
              filter: "brightness(0) invert(1)",
            }}
          />
        </OverviewItemHolder>
      </div>
      <div className="flex items-start w-full justify-between mt-4">
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
