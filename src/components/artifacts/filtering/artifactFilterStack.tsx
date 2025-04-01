import { DeleteIcon } from "lucide-react";

import RarityFilter from "~/components/common/filters/rarityFilter";
import SearchFilter from "~/components/common/filters/searchFilter";
import { IRarityType } from "~/types/enka/enka.types";

type Props = {
  setIsFilterOpen: (isOpen: boolean) => void;
  artifactSearch: string;
  setArtifactSearch: (search: string) => void;
  selectedArtifactRarity: IRarityType | null;
  setSelectedArtifactRarity: (rarity: IRarityType | null) => void;
};

export default function ArtifactFilterStack({
  setIsFilterOpen,
  artifactSearch,
  setArtifactSearch,
  selectedArtifactRarity,
  setSelectedArtifactRarity
}: Readonly<Props>) {
  return (
    <>
      <SearchFilter
        {...{
          searchValue: artifactSearch,
          setSearchValue: setArtifactSearch
        }}
      />
      <RarityFilter
        {...{
          selectedRarity: selectedArtifactRarity,
          setSelectedRarity: setSelectedArtifactRarity,
          category: "artifact"
        }}
      />
      <button
        className="mb-3 flex h-[40px] w-full max-w-[300px] cursor-pointer items-center rounded-lg p-2 text-xs text-white hover:bg-slate-700 lg:w-auto"
        onClick={() => {
          setArtifactSearch("");
          setSelectedArtifactRarity(null);
          setIsFilterOpen(false);
        }}
      >
        Clear
        <DeleteIcon className="ml-2 size-4" />
      </button>
    </>
  );
}
