import { useAtomValue } from "jotai";

import {
  artifactRarityAtom,
  artifactSearchAtom,
  artifactSetSortingAtom,
  artifactSortAscAtom
} from "~/atoms/teyvat/artifact.atom";

function useArtifactFilters() {
  const artifactRarity = useAtomValue(artifactRarityAtom);
  const search = useAtomValue(artifactSearchAtom);
  const sort = useAtomValue(artifactSetSortingAtom);
  const isAsc = useAtomValue(artifactSortAscAtom);

  return { artifactRarity, search, sort, isAsc };
}

export default useArtifactFilters;
