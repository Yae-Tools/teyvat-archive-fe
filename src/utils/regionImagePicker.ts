import Fontaine from "~/assets/icons/nations/UI_ChapterIcon_Fontaine.png";
import Inazuma from "~/assets/icons/nations/UI_ChapterIcon_Inazuma.png";
import Liyue from "~/assets/icons/nations/UI_ChapterIcon_Liyue.png";
import Mondstadt from "~/assets/icons/nations/UI_ChapterIcon_Mengde.png";
import Natlan from "~/assets/icons/nations/UI_ChapterIcon_Natlan.png";
import Sumeru from "~/assets/icons/nations/UI_ChapterIcon_Sumeru.png";

export const getRegionImageByNumber = (regionNumber: number) => {
  switch (regionNumber) {
    case 1:
      return Mondstadt;
    case 2:
      return Liyue;
    case 3:
      return Inazuma;
    case 4:
      return Sumeru;
    case 5:
      return Fontaine;
    case 6:
      return Natlan;
    default:
      return Mondstadt;
  }
};
