import { atomWithStorage } from "jotai/utils";

export const useFilterTravelersAtom = atomWithStorage(
  "useFilterTravelers",
  true
);
export const useSelectedTravelerAtom = atomWithStorage(
  "useSelectedTraveler",
  "PlayerBoy"
);
export const useCarouselAutoPlayAtom = atomWithStorage(
  "useCarouselAutoPlay",
  false
);
export const useCarouselIntervalAtom = atomWithStorage(
  "useCarouselInterval",
  5000
);
