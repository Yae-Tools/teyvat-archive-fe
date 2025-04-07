import { RARITY_TYPE_KEYS } from "~/data/teyvatData";
import { IRarityType } from "~/types/enka/enka.types";

function rarityParser(rarity: number): IRarityType {
  switch (rarity) {
    case 1:
      return RARITY_TYPE_KEYS.QUALITY_GRAY;

    case 2:
      return RARITY_TYPE_KEYS.QUALITY_GREEN;

    case 3:
      return RARITY_TYPE_KEYS.QUALITY_BLUE;

    case 4:
      return RARITY_TYPE_KEYS.QUALITY_PURPLE;

    case 5:
      return RARITY_TYPE_KEYS.QUALITY_ORANGE;

    case 6:
      return RARITY_TYPE_KEYS.QUALITY_ORANGE_SP;

    default:
      return RARITY_TYPE_KEYS.QUALITY_GRAY;
  }
}

export const inverseRarityParser = (rarity: IRarityType): number => {
  switch (rarity) {
    case RARITY_TYPE_KEYS.QUALITY_GRAY:
      return 1;
    case RARITY_TYPE_KEYS.QUALITY_GREEN:
      return 2;
    case RARITY_TYPE_KEYS.QUALITY_BLUE:
      return 3;
    case RARITY_TYPE_KEYS.QUALITY_PURPLE:
      return 4;
    case RARITY_TYPE_KEYS.QUALITY_ORANGE:
      return 5;
    case RARITY_TYPE_KEYS.QUALITY_ORANGE_SP:
      return 6;
    default:
      return 1; // Default case, should not happen
  }
};

export default rarityParser;
