import { useEffect, useState } from "react";
import AttributeDesktopContainer from "~/components/layout/container/attributeDesktopContainer";
import squashWeaponLevels from "~/utils/squashWeaponLevels";
import StatsSection from "./statsSection";

type Props = {
  stats: {
    [key: string]: IEnkaStat[];
  };
  stars: number;
};

export default function WeaponStatsDesktop({ stats, stars }: Readonly<Props>) {
  const [squashedView, setSquashedView] = useState(false);
  const [mutatedStats, setMutatedStats] = useState(stats);

  useEffect(() => {
    if (squashedView) {
      const squashedLevels = squashWeaponLevels(
        stats,
        stats[1][1].fightProp as keyof IEnkaStat
      );

      //only display values from keys of squashedLevels
      const squahsedStats = Object.fromEntries(
        Object.entries(stats).filter(([key]) => squashedLevels.includes(key))
      );

      setMutatedStats(squahsedStats);
    } else {
      setMutatedStats(stats);
    }
  }, [squashedView]);

  return (
    <AttributeDesktopContainer title="Stats">
      <StatsSection
        {...{ setSquashedView, stars, squashedView, stats: mutatedStats }}
      />
    </AttributeDesktopContainer>
  );
}
