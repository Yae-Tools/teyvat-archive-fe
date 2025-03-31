import { useState } from "react";
import AttributeDesktopContainer from "~/components/layout/container/attributeDesktopContainer";
import RefinementSection from "./refinementSection";
import { IRefinement } from "~/types/enka/weapon.types";

type Props = {
  refinements: IRefinement[];
};

export default function WeaponRefinementDesktop({
  refinements,
}: Readonly<Props>) {
  const [refinementLevel, setRefinementLevel] = useState(1);

  return (
    <AttributeDesktopContainer title="Refinements">
      <RefinementSection
        {...{
          refinements,
          setRefinementLevel,
          refinementLevel,
          align: "start",
        }}
      />
    </AttributeDesktopContainer>
  );
}
