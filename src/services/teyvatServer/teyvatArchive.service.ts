import { createAxiosService } from "../http/axios.service";

export const ENKA_BASE_URL = process.env.NEXT_PUBLIC_ENKA_BASE_URL as string;

export const serverInstance = createAxiosService(ENKA_BASE_URL);

export const getCharacters = async () => {
  try {
    const response = await serverInstance.get("/characters/all");
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getCharacterBySkillDepotId = async (
  enkaId: string,
  skillDepotId: string
) => {
  try {
    const response = await serverInstance.get(`/characters/id/${enkaId}`, {
      params: { skillDepotId },
    });

    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getWeapons = async () => {
  try {
    const response = await serverInstance.get("/weapons/all");
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getWeaponById = async (weaponId: string) => {
  try {
    const response = await serverInstance.get(`/weapons/id/${weaponId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getWeaponSeries = async () => {
  try {
    const response = await serverInstance.get("/weapons/series");
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getArtifacts = async () => {
  try {
    const response = await serverInstance.get("/artifacts/all");
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getArtifactSets = async () => {
  try {
    const response = await serverInstance.get("/artifacts/sets");
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

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
  console.log("materialId", materialId);
  try {
    const response = await serverInstance.get(`/materials/id/${materialId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getAllEvents = async () => {
  try {
    const response = await serverInstance.get("/events/all");
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
