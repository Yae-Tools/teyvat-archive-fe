function squashWeaponLevels(
  stats: { [key: string]: IEnkaStat[] },
  propName: keyof IEnkaStat
) {
  const squashedLevels: string[] = [];
  let prevValue: IEnkaStat | undefined = undefined;

  Object.keys(stats).forEach((level) => {
    const data = stats[level];

    //find the related stat
    const secondaryStat = data.find((stat) => stat.fightProp === propName);

    if (!secondaryStat) return;

    const currentSecondStatValue = secondaryStat.rawValue;

    //if this is the first iteration, include that
    if (
      prevValue === undefined ||
      currentSecondStatValue !== prevValue.rawValue
    ) {
      squashedLevels.push(level);
    }
    prevValue = secondaryStat;
  });

  return squashedLevels;
}

export default squashWeaponLevels;
