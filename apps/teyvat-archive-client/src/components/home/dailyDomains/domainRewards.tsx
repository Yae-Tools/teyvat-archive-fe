import OptimizedImage from "~/components/common/basic/optimizedImage";
import { IDomainReward } from "~/types/enka/domain.types";

type Props = {
  reward: IDomainReward[];
};

const EXCLUDED_REWARD_IDS = [102, 105, 202]; //102: Adventure XP, 105: Companion XP, 202: Mora

export default function DomainRewards({ reward }: Readonly<Props>) {
  return (
    <div className="flex flex-row gap-2">
      {reward
        .filter((reward) => !EXCLUDED_REWARD_IDS.includes(reward.id))
        .map((reward) => (
          <div key={reward.id}>
            <OptimizedImage
              src={reward.icon}
              alt={reward.name}
              width={100}
              height={100}
              className="size-8 xl:size-12"
            />
          </div>
        ))}
    </div>
  );
}
