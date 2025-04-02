import { StaticImageData } from "next/image";

import BracerIcon from "~/assets/icons/equip/UI_Icon_Equip_Bracer.png";
import DressIcon from "~/assets/icons/equip/UI_Icon_Equip_Dress.png";
import NecklaceIcon from "~/assets/icons/equip/UI_Icon_Equip_Necklace.png";
import RingIcon from "~/assets/icons/equip/UI_Icon_Equip_Ring.png";
import ShoeIcon from "~/assets/icons/equip/UI_Icon_Equip_Shoes.png";
import { EQUIP_TYPE_KEYS } from "~/data/teyvatData";
import { IEquipType } from "~/types/enka/enka.types";

const equipIconMap = new Map<string, StaticImageData>();
equipIconMap.set(EQUIP_TYPE_KEYS.EQUIP_BRACER, BracerIcon);
equipIconMap.set(EQUIP_TYPE_KEYS.EQUIP_NECKLACE, NecklaceIcon);
equipIconMap.set(EQUIP_TYPE_KEYS.EQUIP_RING, RingIcon);
equipIconMap.set(EQUIP_TYPE_KEYS.EQUIP_SHOES, ShoeIcon);
equipIconMap.set(EQUIP_TYPE_KEYS.EQUIP_DRESS, DressIcon);

function getEquipIcon(equipType: IEquipType): StaticImageData {
  return equipIconMap.get(equipType) as StaticImageData;
}

const equipIconArray = Array.from(equipIconMap, ([id, url]) => ({ id, url }));

export { equipIconMap, getEquipIcon, equipIconArray };
