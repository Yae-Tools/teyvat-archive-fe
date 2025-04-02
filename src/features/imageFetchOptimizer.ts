import aetherSplashImage from "~/assets/images/traveler/aether-nobg.png";
import lumineSplashImage from "~/assets/images/traveler/lumine-nobg.png";
import { ICharacter } from "~/types/enka/character.types";

const IMAGE_BASE_URL = process.env.NEXT_PUBLIC_IMAGE_CDN_BASE_URL as string;

export const transformCharacterData = (character: ICharacter) => {
  if (!character.isTraveler && !character?.nameCard) return character;

  let nameCard;
  let splashUrl: string;

  if (character.isTraveler) {
    const isAether = character.nameId === "PlayerBoy";

    nameCard = `${IMAGE_BASE_URL}/nameCardPicAlpha/UI_NameCardPic_${character.name}.png`;
    splashUrl = isAether ? aetherSplashImage.src : lumineSplashImage.src;
  } else {
    const currentName = character.nameCard?.split("/").pop();
    nameCard = `${IMAGE_BASE_URL}/nameCardPicAlpha/${currentName}`;

    splashUrl = character.splashUrl;
  }

  const constellationIcon = `${IMAGE_BASE_URL}/chapterIcons/UI_ChapterIcon_${character.nameId}.png`;
  const currentSideIcon = character?.sideIcon.split("/").pop();
  const sideIcon = `https://enka.network/ui/${currentSideIcon}`;

  const updatedCharacter = {
    ...character,
    nameCard,
    splashUrl,
    sideIcon,
    constellationIcon: constellationIcon
  };

  return updatedCharacter;
};
