import { StaticImageData } from "next/image";
import BracerIcon from "~/assets/icons/equip/UI_Icon_Equip_Bracer.png";
import DressIcon from "~/assets/icons/equip/UI_Icon_Equip_Dress.png";
import NecklaceIcon from "~/assets/icons/equip/UI_Icon_Equip_Necklace.png";
import RingIcon from "~/assets/icons/equip/UI_Icon_Equip_Ring.png";
import ShoeIcon from "~/assets/icons/equip/UI_Icon_Equip_Shoes.png";

const equipIconMap = new Map<EquipType, StaticImageData>();
equipIconMap.set("EQUIP_BRACER", BracerIcon);
equipIconMap.set("EQUIP_NECKLACE", NecklaceIcon);
equipIconMap.set("EQUIP_RING", RingIcon);
equipIconMap.set("EQUIP_SHOES", ShoeIcon);
equipIconMap.set("EQUIP_DRESS", DressIcon);

const equipTitleMap = new Map<EquipType, string>();
equipTitleMap.set("EQUIP_BRACER", "Flower of Life");
equipTitleMap.set("EQUIP_NECKLACE", "Plume of Death");
equipTitleMap.set("EQUIP_RING", "Sands of Eon");
equipTitleMap.set("EQUIP_SHOES", "Goblet of Eonothem");
equipTitleMap.set("EQUIP_DRESS", "Circlet of Logos");

function getEquipIcon(equipType: EquipType): StaticImageData {
  return equipIconMap.get(equipType) as StaticImageData;
}

function getEquipTitle(equipType: EquipType): string {
  return equipTitleMap.get(equipType) ?? "";
}

const equipIconArray = Array.from(equipIconMap, ([id, url]) => ({ id, url }));
const equipTitleArray = Array.from(equipTitleMap, ([id, title]) => ({
  id,
  title,
}));

export {
  equipIconMap,
  getEquipIcon,
  equipIconArray,
  getEquipTitle,
  equipTitleArray,
  equipTitleMap,
};
