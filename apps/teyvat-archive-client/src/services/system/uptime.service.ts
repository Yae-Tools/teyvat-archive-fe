import { createAxiosService } from "../http/axios.service";

export const UPTIME_BASE_URL = process.env
  .NEXT_PUBLIC_UPTIME_BASE_URL as string;

export const uptimeInstance = createAxiosService(UPTIME_BASE_URL);

export const getUptime = async () => {
  try {
    const response = await uptimeInstance.get("/api/status");
    return response.data;
  } catch (error) {
    console.error("Error fetching uptime data:", error);
    return [];
  }
};

export const getUptimeHistory = async (
  instance: "main" | "cdn" | "api" | "dashboard"
) => {
  try {
    const response = await uptimeInstance.get("/api/history", {
      params: { site: instance }
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching uptime history for ${instance}:`, error);
    return [];
  }
};
