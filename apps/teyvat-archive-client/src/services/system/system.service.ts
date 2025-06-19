import { createAxiosService } from "../http/axios.service";

export const ENKA_BASE_URL = process.env.NEXT_PUBLIC_ENKA_BASE_URL as string;

export const serverInstance = createAxiosService(ENKA_BASE_URL);

export const healthCheck = async () => {
  try {
    const response = await serverInstance.get("/system/health");
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getSystemVersion = async () => {
  try {
    const response = await serverInstance.get("/system/server/version");
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getGameVersion = async () => {
  try {
    const response = await serverInstance.get("/system/game/version");
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getRedeemCodes = async () => {
  try {
    const response = await serverInstance.get("/codes/all");
    return response.data;
  } catch (error) {
    console.error(error);
    return {
      active: [],
      inactive: []
    };
  }
};
