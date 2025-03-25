function rarityParser(rarity: number) {
  switch (rarity) {
    case 1:
      return "QUALITY_GRAY";

    case 2:
      return "QUALITY_GREEN";

    case 3:
      return "QUALITY_BLUE";

    case 4:
      return "QUALITY_PURPLE";

    case 5:
      return "QUALITY_ORANGE";

    case 6:
      return "QUALITY_ORANGE_SP";

    default:
      return "QUALITY_GRAY";
  }
}

export default rarityParser;
