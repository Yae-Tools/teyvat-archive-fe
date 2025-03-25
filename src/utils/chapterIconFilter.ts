export default async function chapterIconFilter(characterName: string) {
  let image = null;

  try {
    const imageModule = await import(
      `../assets/images/chapters/UI_ChapterIcon_${characterName}.png`
    );

    image = imageModule.default;
  } catch {
    try {
      const imageModule2 = await import(
        `../assets/images/constellations/Eff_UI_Talent_${characterName}.png`
      );

      image = imageModule2.default;
    } catch {
      image = null;
    }
  }

  return image;
}

export async function constellationIconFilter(characterName: string) {
  let image = null;

  try {
    const imageModule = await import(
      `../assets/images/constellations/Eff_UI_Talent_${characterName}.png`
    );

    image = imageModule.default;
  } catch {
    image = null;
  }

  return image;
}
