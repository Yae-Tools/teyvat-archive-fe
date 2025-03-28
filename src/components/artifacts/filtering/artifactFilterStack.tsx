import { DeleteIcon } from "lucide-react";
import RarityFilter from "~/components/common/filters/rarityFilter";
import SearchFilter from "~/components/common/filters/searchFilter";

type Props = {
  setIsFilterOpen: (isOpen: boolean) => void;
  artifactSearch: string;
  setArtifactSearch: (search: string) => void;
  selectedArtifactRarity: string;
  setSelectedArtifactRarity: (rarity: string) => void;
};

export default function ArtifactFilterStack({
  setIsFilterOpen,
  artifactSearch,
  setArtifactSearch,
  selectedArtifactRarity,
  setSelectedArtifactRarity,
}: Readonly<Props>) {
  return (
    <>
      <SearchFilter
        {...{
          searchValue: artifactSearch,
          setSearchValue: setArtifactSearch,
        }}
      />
      <RarityFilter
        {...{
          selectedRarity: selectedArtifactRarity,
          setSelectedRarity: setSelectedArtifactRarity,
          category: "artifact",
        }}
      />
      <button
        className="w-full lg:w-auto p-2 mb-3 max-w-[300px] cursor-pointer rounded-lg h-[40px] text-xs hover:bg-slate-700 text-white flex items-center"
        onClick={() => {
          setArtifactSearch("");
          setSelectedArtifactRarity("all");
          setIsFilterOpen(false);
        }}
      >
        Clear
        <DeleteIcon className="size-4 ml-2" />
      </button>
    </>
  );
}
