const filterCharacters = (
  characters: IBaseCharacter[],
  selectedTraveler: string
) => {
  return characters.filter((character) => {
    if (!character.isTraveler) {
      return true;
    }
    if (character.isTraveler && character.nameId === selectedTraveler) {
      return true;
    }
    return false;
  });
};

export default filterCharacters;
