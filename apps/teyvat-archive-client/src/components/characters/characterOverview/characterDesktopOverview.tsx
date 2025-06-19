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
  birthday: IBirthday | null;
  isTraveler: boolean;
};

export default function CharacterDesktopOverview({
  element,
  weapon,
  affiliation,
  birthday,
  isTraveler
}: Readonly<Props>) {
  return (
    <div className="mt-4 hidden h-full w-full flex-col items-start justify-center py-4 xl:mt-8 xl:flex">
      <div className="flex w-full flex-col items-start justify-evenly">
        <div className="flex w-full items-start justify-start">
          <OverviewItemHolder label="Element" value={element}>
            <Image
              className="mr-2 size-12"
              src={getElementTypeImage(element)}
              alt={element}
            />
          </OverviewItemHolder>
          <OverviewItemHolder
            label="Weapon Type"
            value={WEAPON_TYPES[weapon]}
            textShadowLabel
            textShadowValue
          >
            <Image
              className="mr-2 size-14"
              src={weaponTypeIconFilter[weapon]}
              alt={weapon}
              style={{
                filter: "brightness(0) invert(1)"
              }}
            />
          </OverviewItemHolder>
        </div>
        <div className="flex w-full items-start justify-start">
          <OverviewItemHolder
            label="Affiliation"
            value={characterLocationParser(affiliation, isTraveler)}
          />
          <OverviewItemHolder
            label="Birthday"
            value={birthday ? `${birthdayFormatter(birthday)}` : "Unknown"}
            textShadowLabel
            textShadowValue
          />
        </div>
      </div>
    </div>
  );
}
