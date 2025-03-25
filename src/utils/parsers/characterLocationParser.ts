function characterLocationParser(
  location: ICharacterLocation,
  isTraveler: boolean
): string {
  if (isTraveler) {
    return "Unknown";
  }

  if (location.faction === location.region) {
    return location.faction;
  }

  return `${location.faction} 󠁯•󠁏󠁏 ${location.region}`;
}

export default characterLocationParser;
