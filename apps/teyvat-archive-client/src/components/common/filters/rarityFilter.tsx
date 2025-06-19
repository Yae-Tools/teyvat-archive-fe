import { memo } from "react";

import { IRarityType } from "~/types/enka/enka.types";

import ItemSeparator from "./itemSeparator";
import RaritySelector from "./raritySelector";

type Props = {
  selectedRarity: IRarityType | null;
  setSelectedRarity: (rarity: IRarityType | null) => void;
  category: "weapon" | "character" | "artifact";
};

function RarityFilter({
  selectedRarity,
  setSelectedRarity,
  category = "weapon"
}: Readonly<Props>) {
  return (
    <div className="mb-3 flex h-[40px] w-full max-w-[300px] items-center justify-center rounded-lg border-2 border-slate-600 p-2 font-semibold lg:w-max">
      {category === "weapon" && (
        <>
          <RaritySelector
            {...{ selectedRarity, setSelectedRarity, rarityIndex: 0 }}
          />
          <ItemSeparator />
          <RaritySelector
            {...{ selectedRarity, setSelectedRarity, rarityIndex: 1 }}
          />
          <ItemSeparator />
        </>
      )}

      {category !== "character" && (
        <>
          <RaritySelector
            {...{ selectedRarity, setSelectedRarity, rarityIndex: 2 }}
          />
          <ItemSeparator />
        </>
      )}

      <RaritySelector
        {...{ selectedRarity, setSelectedRarity, rarityIndex: 3 }}
      />
      <ItemSeparator />

      <RaritySelector
        {...{ selectedRarity, setSelectedRarity, rarityIndex: 4 }}
      />

      {category === "character" && (
        <>
          <ItemSeparator />
          <RaritySelector
            {...{ selectedRarity, setSelectedRarity, rarityIndex: 5 }}
          />
        </>
      )}
    </div>
  );
}

export default memo(RarityFilter);
