import { QueryClient, useQuery } from "@tanstack/react-query";

import {
  getWeapons,
  getWeaponSeries
} from "~/services/teyvatServer/teyvatArchive.service";
import { IBaseWeaponSeries, IBasicWeapon } from "~/types/enka/weapon.types";

export const useAllWeaponData = () => {
  return useQuery({
    queryKey: ["weapons"],
    queryFn: async () => {
      const data: IBasicWeapon[] = await getWeapons();
      return data;
    },
    initialData: [],
    refetchInterval: 1000 * 60 * 60 // 1 hour
  });
};

export const useAllWeaponSeriesData = () => {
  return useQuery({
    queryKey: ["weaponSeries"],
    queryFn: async () => {
      const data: IBaseWeaponSeries = await getWeaponSeries();
      return data;
    },
    initialData: {},
    refetchInterval: 1000 * 60 * 60 // 1 hour
  });
};

export const prefetchAllWeapons = async (queryClient: QueryClient) => {
  return queryClient.prefetchQuery({
    queryKey: ["weapons"],
    queryFn: async () => {
      const data: IBasicWeapon[] = await getWeapons();
      return data;
    }
  });
};

export const prefetchAllWeaponSeries = async (queryClient: QueryClient) => {
  return queryClient.prefetchQuery({
    queryKey: ["weaponSeries"],
    queryFn: async () => {
      const data: IBaseWeaponSeries = await getWeaponSeries();
      return data;
    }
  });
};
