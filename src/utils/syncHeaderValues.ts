const FEATURES = [
  {
    id: "useImageFetchOptimizer",
    headerName: "X-Use-Image-Optimizer",
    value: true,
  },
  {
    id: "useFilterTravelers",
    headerName: "X-Use-Filter-Travelers",
    value: true,
  },
  {
    id: "useSelectedTraveler",
    headerName: "X-Use-Selected-Traveler",
    value: "PlayerBoy",
  },
  {
    id: "useCarouselAutoPlay",
    headerName: "X-Use-Carousel-Auto-Play",
    value: true,
  },
  {
    id: "useCarouselInterval",
    headerName: "X-Use-Carousel-Interval",
    value: 3000,
  },
];

export function syncInitialValues() {
  for (const feature of FEATURES) {
    const existValue = localStorage.getItem(feature.id);
    if (existValue === null) {
      localStorage.setItem(feature.id, feature.value.toString());
    }
  }
}
