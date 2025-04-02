import AttributeMobileContainer from "~/components/layout/container/attributeMobileContainer";
import { ISetBonus } from "~/types/enka/artifacts.types";

type Props = {
  setBonus: ISetBonus[];
};

export default function ArtifactSetBonusMobile({ setBonus }: Readonly<Props>) {
  return (
    <>
      <AttributeMobileContainer title="2-Pieces Set Bonus">
        <p className="text-md">{setBonus[0].description}</p>
      </AttributeMobileContainer>
      {setBonus[1] && (
        <AttributeMobileContainer title="4-Pieces Set Bonus">
          <p className="text-md">{setBonus[1].description}</p>
        </AttributeMobileContainer>
      )}
    </>
  );
}
