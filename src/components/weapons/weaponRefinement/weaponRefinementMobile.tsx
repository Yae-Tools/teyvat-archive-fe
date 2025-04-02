import { useState } from "react";

import AttributeMobileContainer from "~/components/layout/container/attributeMobileContainer";
import { IRefinement } from "~/types/enka/weapon.types";

import RefinementSection from "./refinementSection";

type Props = {
  refinements: IRefinement[];
};

export default function WeaponRefinementMobile({
  refinements
}: Readonly<Props>) {
  const [refinementLevel, setRefinementLevel] = useState(1);

  return (
    <AttributeMobileContainer title="Refinement">
      <RefinementSection
        {...{ refinementLevel, setRefinementLevel, refinements }}
      />
    </AttributeMobileContainer>
  );
}
