import { cache } from "react";

import { createAxiosService } from "../http/axios.service";

export const ENKA_BASE_URL = process.env.NEXT_PUBLIC_ENKA_BASE_URL as string;

export const serverInstance = createAxiosService(ENKA_BASE_URL);

export const getCharacters = cache(async () => {
  try {
    const response = await serverInstance.get("/characters/all");
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
});

export const getCharacterBySkillDepotId = async (
  enkaId: string,
  skillDepotId: string
) => {
  try {
    const response = await serverInstance.get(`/characters/id/${enkaId}`, {
      params: { skillDepotId }
    });

    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getWeapons = cache(async () => {
  try {
    const response = await serverInstance.get("/weapons/all");
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
});

export const getWeaponById = async (weaponId: string) => {
  try {
    const response = await serverInstance.get(`/weapons/id/${weaponId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getWeaponSeries = cache(async () => {
  try {
    const response = await serverInstance.get("/weapons/series");
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
});

export const getArtifacts = cache(async () => {
  try {
    const response = await serverInstance.get("/artifacts/all");
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
});

export const getArtifactSets = cache(async () => {
  try {
    const response = await serverInstance.get("/artifacts/sets");
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
});

export const getArtifactSetById = async (artifactSetId: string) => {
  try {
    const response = await serverInstance.get(
      `/artifacts/set/${artifactSetId}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getMaterialById = async (materialId: string) => {
  try {
    const response = await serverInstance.get(`/materials/id/${materialId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getAllEvents = cache(async () => {
  try {
    const response = await serverInstance.get("/events/all");
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
});

export const getAllCalendarEvents = cache(async () => {
  try {
    const response = await serverInstance.get("/calendar/all");
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
});

export const getAbyssData = cache(async () => {
  try {
    const response = await serverInstance.get("/abyss/data");
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
});

export const getAbyssBlessings = cache(async () => {
  try {
    const response = await serverInstance.get("/abyss/blessings");
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
});

export const getDailyDomains = cache(async () => {
  try {
    const response = await serverInstance.get("/domains/daily");
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
});
