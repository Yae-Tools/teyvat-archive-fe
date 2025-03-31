import defaultBg from "~/assets/images/bgs/UI_MallSlotA_Bg0.png";
import oneStarBg from "~/assets/images/bgs/UI_MallSlotA_Bg1.png";
import twoStarBg from "~/assets/images/bgs/UI_MallSlotA_Bg2.png";
import threeStarBg from "~/assets/images/bgs/UI_MallSlotA_Bg3.png";
import fourStarBg from "~/assets/images/bgs/UI_MallSlotA_Bg4.png";
import fiveStarBg from "~/assets/images/bgs/UI_MallSlotA_Bg5.png";
import { RARITY_TYPES } from "~/data/teyvatData";

function rarityBgPicker(stars: number): string {
  switch (stars.toString()) {
    case RARITY_TYPES.QUALITY_GRAY:
      return oneStarBg.src;
    case RARITY_TYPES.QUALITY_GREEN:
      return twoStarBg.src;
    case RARITY_TYPES.QUALITY_BLUE:
      return threeStarBg.src;
    case RARITY_TYPES.QUALITY_PURPLE:
      return fourStarBg.src;
    case RARITY_TYPES.QUALITY_ORANGE:
      return fiveStarBg.src;
    default:
      return defaultBg.src;
  }
}

export default rarityBgPicker;
