import { useState } from "react";

import AttributeMobileContainer from "~/components/layout/container/attributeMobileContainer";
import RefinementSection from "./refinementSection";
import { IRefinement } from "~/types/enka/weapon.types";

type Props = {
  refinements: IRefinement[];
};

export default function WeaponRefinementMobile({
  refinements,
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
