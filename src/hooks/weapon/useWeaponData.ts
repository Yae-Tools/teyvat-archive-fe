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
    staleTime: 1000 * 60 * 60, // 1 hour
    gcTime: 1000 * 60 * 60 * 24 // 24 hours (previously cacheTime)
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
    staleTime: 1000 * 60 * 60, // 1 hour
    gcTime: 1000 * 60 * 60 * 24 // 24 hours (previously cacheTime)
  });
};

export const prefetchAllWeapons = async (queryClient: QueryClient) => {
  return queryClient.prefetchQuery({
    queryKey: ["weapons"],
    queryFn: async () => {
      const data: IBasicWeapon[] = await getWeapons();
      return data;
    },
    staleTime: 1000 * 60 * 60, // 1 hour
    gcTime: 1000 * 60 * 60 * 24 // 24 hours (previously cacheTime)
  });
};

export const prefetchAllWeaponData = async (queryClient: QueryClient) => {
  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: ["weapons"],
      queryFn: async () => {
        const data: IBasicWeapon[] = await getWeapons();
        return data;
      },
      staleTime: 1000 * 60 * 60, // 1 hour
      gcTime: 1000 * 60 * 60 * 24 // 24 hours (previously cacheTime)
    }),
    queryClient.prefetchQuery({
      queryKey: ["weaponSeries"],
      queryFn: async () => {
        const data: IBaseWeaponSeries = await getWeaponSeries();
        return data;
      },
      staleTime: 1000 * 60 * 60, // 1 hour
      gcTime: 1000 * 60 * 60 * 24 // 24 hours (previously cacheTime)
    })
  ]);
  return queryClient;
};
