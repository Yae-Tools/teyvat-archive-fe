import aetherSplashImage from "~/assets/images/traveler/aether-nobg.png";
import lumineSplashImage from "~/assets/images/traveler/lumine-nobg.png";
import aetherCons from "~/assets/images/traveler/Viator_Shape.png";
import lumineCons from "~/assets/images/traveler/Viatrix_Shape.png";
import { ICharacter } from "~/types/enka/character.types";

const IMAGE_BASE_URL = process.env.NEXT_PUBLIC_IMAGE_CDN_BASE_URL as string;

export const transformCharacterData = (character: ICharacter) => {
  if (!character.isTraveler && !character?.nameCard) return character;

  let nameCard;
  let splashUrl;
  let constellationIcon;

  constellationIcon = `${IMAGE_BASE_URL}/constellations/new/Eff_UI_Talent_${character.nameId}.png`;

  if (character.isTraveler) {
    const isAether = character.nameId === "PlayerBoy";

    nameCard = `${IMAGE_BASE_URL}/nameCardPicAlpha/UI_NameCardPic_${character.name}.png`;
    splashUrl = isAether ? aetherSplashImage.src : lumineSplashImage.src;
    constellationIcon = isAether ? aetherCons.src : lumineCons.src;
  } else {
    const currentName = character.nameCard?.split("/").pop();
    nameCard = `${IMAGE_BASE_URL}/nameCardPicAlpha/${currentName}`;
    splashUrl = character.splashUrl;
  }

  const currentSideIcon = character?.sideIcon.split("/").pop();
  const sideIcon = `https://enka.network/ui/${currentSideIcon}`;

  const updatedCharacter = {
    ...character,
    nameCard,
    splashUrl,
    sideIcon,
    constellationIcon
  };

  return updatedCharacter;
};
