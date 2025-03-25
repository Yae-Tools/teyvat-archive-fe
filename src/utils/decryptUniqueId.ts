const decryptCharacterUniqueRoute = (uniqueRoute: string) => {
  // sample route: /character/ayaka-10000002-201

  // get skillDepotId(201) and enkaId(10000002) from the route
  const [characterName, enkaId, skillDepotId] = uniqueRoute.split("-");

  return { characterName, skillDepotId, enkaId };
};

const decryptWeaponUniqueRoute = (uniqueRoute: string) => {
  //sample route: /weapon/Sword_Blunt-11101'
  const [weaponName, weaponId] = uniqueRoute.split("-");
  return { weaponName, weaponId };
};

export { decryptCharacterUniqueRoute, decryptWeaponUniqueRoute };
