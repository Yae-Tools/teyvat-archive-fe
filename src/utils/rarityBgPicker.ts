import defaultBg from "~/assets/images/bgs/UI_MallSlotA_Bg0.png";
import oneStarBg from "~/assets/images/bgs/UI_MallSlotA_Bg1.png";
import twoStarBg from "~/assets/images/bgs/UI_MallSlotA_Bg2.png";
import threeStarBg from "~/assets/images/bgs/UI_MallSlotA_Bg3.png";
import fourStarBg from "~/assets/images/bgs/UI_MallSlotA_Bg4.png";
import fiveStarBg from "~/assets/images/bgs/UI_MallSlotA_Bg5.png";

function rarityBgPicker(stars: number): string {
  switch (stars) {
    case 1:
      return oneStarBg;
    case 2:
      return twoStarBg;
    case 3:
      return threeStarBg;
    case 4:
      return fourStarBg;
    case 5:
      return fiveStarBg;
    default:
      return defaultBg;
  }
}

export default rarityBgPicker;
