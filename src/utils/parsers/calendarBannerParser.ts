import {
  ICalendarBanner,
  ICalendarBannerCharacter,
  ICalendarBannerWeapon,
} from "~/types/enka/enka.types";

const parseCalendarBanners = (banners: ICalendarBanner[]) => {
  //separate characters and weapons

  const unsanitizedCharacters: ICalendarBannerCharacter[] = banners.flatMap(
    (banner) => banner.characters
  );
  //if duplicate characters or weapons are found, merge them together
  const characters = unsanitizedCharacters.reduce<ICalendarBannerCharacter[]>(
    (acc, character) => {
      const existingCharacter = acc.find((c) => c.id === character.id);
      if (existingCharacter) {
        return acc;
      }
      return [...acc, character];
    },
    []
  );

  const unsanitizedWeapons = banners.flatMap((banner) => banner.weapons);

  const weapons = unsanitizedWeapons.reduce<ICalendarBannerWeapon[]>(
    (acc, weapon) => {
      const existingWeapon = acc.find((w) => w.id === weapon.id);
      if (existingWeapon) {
        return acc;
      }
      return [...acc, weapon];
    },
    []
  );

  return { characters, weapons };
};

export default parseCalendarBanners;
