import ItemLevelPicker from "~/components/characters/characterTalents/itemLevelPicker";
import { IRefinement } from "~/types/enka/weapon.types";
import parseText from "~/utils/parsers/parseEnkaText";

type Props = {
  refinements: IRefinement[];
  refinementLevel: number;
  setRefinementLevel: (level: number) => void;
  align?: "start" | "center" | "end";
};

export default function RefinementSection({
  refinements,
  refinementLevel,
  setRefinementLevel,
  align = "start"
}: Readonly<Props>) {
  return (
    <div
      className={`flex w-full flex-col space-y-2 py-6 text-white items-${align} justify-center`}
    >
      <h5 className="text-lg font-semibold">{refinements[0].name}</h5>
      <ItemLevelPicker
        {...{
          selectedLevel: refinementLevel,
          setSelectedLevel: setRefinementLevel,
          noOfLevels: refinements.length,
          selectorWidth: 10,
          align
        }}
      />
      <div className={`flex w-full flex-col pb-2 items-${align}`}>
        <h6 className="text-md pb-2">Refinement {refinementLevel}</h6>
        <p
          dangerouslySetInnerHTML={{
            __html: parseText(refinements[refinementLevel - 1].description)
          }}
        />
      </div>
    </div>
  );
}
