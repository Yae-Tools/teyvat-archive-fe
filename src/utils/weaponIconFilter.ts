import { StaticImageData } from "next/image";

import BowIcon from "~/assets/images/weaponTypes/Icon_Bow.png";
import CatalystIcon from "~/assets/images/weaponTypes/Icon_Catalyst.png";
import ClaymoreIcon from "~/assets/images/weaponTypes/Icon_Claymore.png";
import PolearmIcon from "~/assets/images/weaponTypes/Icon_Polearm.png";
import SwordIcon from "~/assets/images/weaponTypes/Icon_Sword.png";

import AtkIcon from "~/assets/icons/stats/FIGHT_PROP_ATTACK.svg";
import AtkPercentIcon from "~/assets/icons/stats/FIGHT_PROP_ATTACK_PERCENT.svg";
import BaseAtkIcon from "~/assets/icons/stats/FIGHT_PROP_BASE_ATTACK.svg";
import EnergyRechargeIcon from "~/assets/icons/stats/FIGHT_PROP_CHARGE_EFFICIENCY.svg";
import CritRateIcon from "~/assets/icons/stats/FIGHT_PROP_CRITICAL.svg";
import CritDmgIcon from "~/assets/icons/stats/FIGHT_PROP_CRITICAL_HURT.svg";
import DefIcon from "~/assets/icons/stats/FIGHT_PROP_DEFENSE.svg";
import DefPercentIcon from "~/assets/icons/stats/FIGHT_PROP_DEFENSE_PERCENT.svg";
import ElecDmgBonusIcon from "~/assets/icons/stats/FIGHT_PROP_ELEC_ADD_HURT.svg";
import EMIcon from "~/assets/icons/stats/FIGHT_PROP_ELEMENT_MASTERY.svg";
import PyroDmgBonusIcon from "~/assets/icons/stats/FIGHT_PROP_FIRE_ADD_HURT.svg";
import DendroDmgBonusIcon from "~/assets/icons/stats/FIGHT_PROP_GRASS_ADD_HURT.svg";
import HealingBonusIcon from "~/assets/icons/stats/FIGHT_PROP_HEAL_ADD.svg";
import HealingReceivedBonusIcon from "~/assets/icons/stats/FIGHT_PROP_HEALED_ADD.svg";
import HPIcon from "~/assets/icons/stats/FIGHT_PROP_HP.svg";
import HPPercentIcon from "~/assets/icons/stats/FIGHT_PROP_HP_PERCENT.svg";
import CryoDmgBonusIcon from "~/assets/icons/stats/FIGHT_PROP_ICE_ADD_HURT.svg";
import PhysicalDmgBonusIcon from "~/assets/icons/stats/FIGHT_PROP_PHYSICAL_ADD_HURT.svg";
import GeoDmgBonusIcon from "~/assets/icons/stats/FIGHT_PROP_ROCK_ADD_HURT.svg";
import ShieldCostReductionIcon from "~/assets/icons/stats/FIGHT_PROP_SHIELD_COST_MINUS_RATIO.svg";
import HydroDmgBonusIcon from "~/assets/icons/stats/FIGHT_PROP_WATER_ADD_HURT.svg";
import AnemoDmgBonusIcon from "~/assets/icons/stats/FIGHT_PROP_WIND_ADD_HURT.svg";

const weaponTypeIconFilter = {
  WEAPON_SWORD_ONE_HAND: SwordIcon,
  WEAPON_CLAYMORE: ClaymoreIcon,
  WEAPON_POLE: PolearmIcon,
  WEAPON_CATALYST: CatalystIcon,
  WEAPON_BOW: BowIcon,
};

const weaponStatIconMap = new Map<string, StaticImageData>();
weaponStatIconMap.set("FIGHT_PROP_ATTACK_PERCENT", AtkPercentIcon);
weaponStatIconMap.set("FIGHT_PROP_ATTACK", AtkIcon);
weaponStatIconMap.set("FIGHT_PROP_BASE_ATTACK", BaseAtkIcon);
weaponStatIconMap.set("FIGHT_PROP_CHARGE_EFFICIENCY", EnergyRechargeIcon);
weaponStatIconMap.set("FIGHT_PROP_CRITICAL", CritRateIcon);
weaponStatIconMap.set("FIGHT_PROP_CRITICAL_HURT", CritDmgIcon);
weaponStatIconMap.set("FIGHT_PROP_DEFENSE_PERCENT", DefPercentIcon);
weaponStatIconMap.set("FIGHT_PROP_DEFENSE", DefIcon);
weaponStatIconMap.set("FIGHT_PROP_ELEMENT_MASTERY", EMIcon);
weaponStatIconMap.set("FIGHT_PROP_ELEC_ADD_HURT", ElecDmgBonusIcon);
weaponStatIconMap.set("FIGHT_PROP_FIRE_ADD_HURT", PyroDmgBonusIcon);
weaponStatIconMap.set("FIGHT_PROP_GRASS_ADD_HURT", DendroDmgBonusIcon);
weaponStatIconMap.set("FIGHT_PROP_ICE_ADD_HURT", CryoDmgBonusIcon);
weaponStatIconMap.set("FIGHT_PROP_ROCK_ADD_HURT", GeoDmgBonusIcon);
weaponStatIconMap.set("FIGHT_PROP_WATER_ADD_HURT", HydroDmgBonusIcon);
weaponStatIconMap.set("FIGHT_PROP_WIND_ADD_HURT", AnemoDmgBonusIcon);
weaponStatIconMap.set("FIGHT_PROP_PHYSICAL_ADD_HURT", PhysicalDmgBonusIcon);
weaponStatIconMap.set("FIGHT_PROP_HEAL_ADD", HealingBonusIcon);
weaponStatIconMap.set("FIGHT_PROP_HEALED_ADD", HealingReceivedBonusIcon);
weaponStatIconMap.set("FIGHT_PROP_HP_PERCENT", HPPercentIcon);
weaponStatIconMap.set("FIGHT_PROP_HP", HPIcon);
weaponStatIconMap.set(
  "FIGHT_PROP_SHIELD_COST_MINUS_RATIO",
  ShieldCostReductionIcon
);

function getWeaponStatIcon(stat: string): StaticImageData {
  return weaponStatIconMap.get(stat) as StaticImageData;
}

export { weaponTypeIconFilter, getWeaponStatIcon };
