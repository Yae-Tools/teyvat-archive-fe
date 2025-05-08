import MiniWeapon from "~/components/common/miniWeapon";
import { useRewardWeapons } from "~/hooks/domain/useReward";
import { IDomainReward } from "~/types/enka/domain.types";

type Props = {
  isLg: boolean;
  rewards: IDomainReward[];
};

export default function RewardWeapons({ isLg, rewards }: Readonly<Props>) {
  return (
    <div
      className={`flex w-full flex-row flex-wrap items-center justify-center gap-2 overflow-x-auto ${
        isLg ? "justify-start" : "justify-center"
      }`}
    >
      {useRewardWeapons(rewards).map((weapon) => (
        <MiniWeapon
          key={weapon.id}
          weapon={{
            id: weapon.id.toString(),
            icon: weapon.iconUrl,
            rarity: weapon.rarity,
            nameId: weapon.nameId
          }}
        />
      ))}
    </div>
  );
}
