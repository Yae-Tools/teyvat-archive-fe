import { RARITY_TYPES } from "~/data/teyvatData";

function rarityParser(rarity: number) {
  switch (rarity) {
    case 1:
      return RARITY_TYPES.QUALITY_GRAY;

    case 2:
      return RARITY_TYPES.QUALITY_GREEN;

    case 3:
      return RARITY_TYPES.QUALITY_BLUE;

    case 4:
      return RARITY_TYPES.QUALITY_PURPLE;

    case 5:
      return RARITY_TYPES.QUALITY_ORANGE;

    case 6:
      return RARITY_TYPES.QUALITY_ORANGE_SP;

    default:
      return RARITY_TYPES.QUALITY_GRAY;
  }
}

export default rarityParser;
