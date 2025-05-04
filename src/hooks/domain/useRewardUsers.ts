import { IDomainReward } from "~/types/enka/domain.types";

export const useRewardUsers = (
  rewards: IDomainReward[],
  selectedTraveler: string
) => {
  const filteredRewards = rewards.filter((reward) => {
    return reward.usedBy.length > 0;
  });

  //collect all usedBy from all filtered rewards
  const allUsedBy = filteredRewards.reduce(
    (acc, reward) => {
      return [...acc, ...reward.usedBy];
    },
    [] as IDomainReward["usedBy"]
  );

  //remove duplicates and filter by selectedTraveler
  const uniqueUsedBy = allUsedBy.filter((value, index, self) => {
    return (
      index ===
        self.findIndex(
          (t) => t.id === value.id && t.element === value.element
        ) && (value.isTraveler ? value.nameId === selectedTraveler : true)
    );
  });

  return uniqueUsedBy;
};
