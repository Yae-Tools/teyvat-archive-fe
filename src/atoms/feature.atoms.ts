import { atomWithStorage } from "jotai/utils";

export const useFilterTravelersAtom = atomWithStorage(
  "useFilterTravelers",
  true
);
export const useSelectedTravelerAtom = atomWithStorage(
  "useSelectedTraveler",
  "PlayerBoy"
);
export const useDisplayDomainRewardUsageAtom = atomWithStorage(
  "useDisplayDomainRewardUsage",
  true
);
export const useDomainRewardUsageItemAtom = atomWithStorage(
  "useDomainRewardUsageItem",
  "3"
);
export const useCarouselAutoPlayAtom = atomWithStorage(
  "useCarouselAutoPlay",
  false
);
export const carouselIntervalAtom = atomWithStorage(
  "useCarouselInterval",
  5000
);

export const defaultServerAtom = atomWithStorage("defaultServer", "ASIA");
