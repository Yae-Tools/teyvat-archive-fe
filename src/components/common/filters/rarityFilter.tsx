import { memo } from "react";

import ItemSeparator from "./itemSeparator";
import RaritySelector from "./raritySelector";

type Props = {
  selectedRarity: string;
  setSelectedRarity: (rarity: string) => void;
  category: "weapon" | "character" | "artifact";
};

function RarityFilter({
  selectedRarity,
  setSelectedRarity,
  category = "weapon",
}: Readonly<Props>) {
  return (
    <div className="w-full font-semibold lg:w-max max-w-[300px] flex items-center justify-center p-2 mb-3 border-2 border-slate-600 rounded-lg h-[40px]">
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
