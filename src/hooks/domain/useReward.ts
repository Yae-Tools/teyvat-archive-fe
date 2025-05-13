import { useAtom } from "jotai";

import { useDomainRewardUsageItemAtom } from "~/atoms/feature.atoms";
import { RARITY_TYPE_KEYS, RARITY_TYPES } from "~/data/teyvatData";
import {
  IDomainReward,
  IRewardUsedByCharacter,
  IRewardUsedByWeapon
} from "~/types/enka/domain.types";

export const useRewardUsers = (
  rewards: IDomainReward[],
  selectedTraveler: string
) => {
  const [useDomainRewardUsageItem] = useAtom(useDomainRewardUsageItemAtom);

  const filteredRewards = rewards.filter((reward) => {
    return reward.usedBy.length > 0;
  });

  //collect all usedBy from all filtered rewards
  const allUsedBy = filteredRewards.reduce(
    (acc, reward) => {
      return [...acc, ...reward.usedBy];
    },
    [] as IDomainReward["usedBy"]
  ) as IRewardUsedByCharacter[];

  //remove duplicates and filter by selectedTraveler
  const uniqueUsedBy = allUsedBy.filter((value, index, self) => {
    return (
      index ===
        self.findIndex(
          (t) => t.id === value.id && t.element === value.element
        ) && (value.isTraveler ? value.nameId === selectedTraveler : true)
    );
  });

  const uniqueFiltered = uniqueUsedBy.filter((user) => {
    if (useDomainRewardUsageItem === RARITY_TYPES.QUALITY_ORANGE) {
      return (
        user.rarity === RARITY_TYPE_KEYS.QUALITY_ORANGE ||
        user.rarity === RARITY_TYPE_KEYS.QUALITY_ORANGE_SP
      );
    } else {
      return true;
    }
  });

  return uniqueFiltered;
};

export const useRewardWeapons = (rewards: IDomainReward[]) => {
  const [useDomainRewardUsageItem] = useAtom(useDomainRewardUsageItemAtom);

  const filteredRewards = rewards.filter((reward) => {
    return reward.usedBy.length > 0;
  });

  //collect all usedBy from all filtered rewards
  const allUsedBy = filteredRewards.reduce(
    (acc, reward) => {
      return [...acc, ...reward.usedBy];
    },
    [] as IDomainReward["usedBy"]
  ) as IRewardUsedByWeapon[];

  //remove duplicates and filter by selectedTraveler
  const uniqueUsedBy = allUsedBy.filter((value, index, self) => {
    return index === self.findIndex((t) => t.id === value.id);
  });

  const uniqueFiltered = uniqueUsedBy.filter((weapon) => {
    if (useDomainRewardUsageItem === "all") {
      return true;
    } else if (useDomainRewardUsageItem === RARITY_TYPES.QUALITY_ORANGE) {
      return weapon.rarity === RARITY_TYPE_KEYS.QUALITY_ORANGE;
    } else if (useDomainRewardUsageItem === RARITY_TYPES.QUALITY_PURPLE) {
      return (
        weapon.rarity === RARITY_TYPE_KEYS.QUALITY_ORANGE ||
        weapon.rarity === RARITY_TYPE_KEYS.QUALITY_PURPLE
      );
    } else if (useDomainRewardUsageItem === RARITY_TYPES.QUALITY_BLUE) {
      return (
        weapon.rarity === RARITY_TYPE_KEYS.QUALITY_ORANGE ||
        weapon.rarity === RARITY_TYPE_KEYS.QUALITY_PURPLE ||
        weapon.rarity === RARITY_TYPE_KEYS.QUALITY_BLUE
      );
    }
    return false;
  });

  return uniqueFiltered;
};
