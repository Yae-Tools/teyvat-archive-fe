import React from "react";

import MiniAvatar from "~/components/common/miniAvatar";
import { useRewardUsers } from "~/hooks/domain/useReward";
import { IDomainReward } from "~/types/enka/domain.types";

type Props = {
  isLg: boolean;
  selectedTraveller: string;
  rewards: IDomainReward[];
  isScrolling: boolean;
};

export default function RewardUsers({
  isLg,
  selectedTraveller,
  rewards,
  isScrolling
}: Readonly<Props>) {
  return (
    <div
      className={`flex w-full flex-row ${isScrolling ? "flex-wrap" : ""} items-center justify-center gap-2 overflow-x-auto ${
        isLg ? "justify-start" : "justify-center"
      }`}
    >
      {useRewardUsers(rewards, selectedTraveller).map((user) => (
        <MiniAvatar
          key={user.id + user.element}
          char={{
            id: user.id.toString(),
            skillDepotId: user.skillDepotId.toString(),
            icon: user.iconUrl,
            element: user.element,
            rarity: user.rarity,
            nameId: user.nameId
          }}
        />
      ))}
    </div>
  );
}
