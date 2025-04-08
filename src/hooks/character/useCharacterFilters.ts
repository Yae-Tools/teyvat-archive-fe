import { useAtomValue } from "jotai";

import {
  characterSearchAtom,
  characterSortAscAtom,
  characterSortingAtom,
  selectedCharacterElementAtom,
  selectedCharacterRarityAtom,
  selectedCharacterWeaponAtom
} from "~/atoms/teyvat/character.atom";

function useCharacterFilters() {
  const element = useAtomValue(selectedCharacterElementAtom);
  const weapon = useAtomValue(selectedCharacterWeaponAtom);
  const rarity = useAtomValue(selectedCharacterRarityAtom);
  const search = useAtomValue(characterSearchAtom);
  const sort = useAtomValue(characterSortingAtom);
  const isAsc = useAtomValue(characterSortAscAtom);

  return { element, weapon, rarity, search, sort, isAsc };
}

export default useCharacterFilters;
