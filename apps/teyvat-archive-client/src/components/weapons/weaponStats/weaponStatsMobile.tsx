import AttributeMobileContainer from "~/components/layout/container/attributeMobileContainer";
import { IEnkaStat } from "~/types/enka/enka.types";

import StatsSection from "./statsSection";

type Props = {
  stats: {
    [key: string]: IEnkaStat[];
  };
  stars: number;
};

export default function WeaponStatsMobile({ stats, stars }: Readonly<Props>) {
  return (
    <AttributeMobileContainer title="Stats">
      <StatsSection {...{ stars, stats }} />
    </AttributeMobileContainer>
  );
}
