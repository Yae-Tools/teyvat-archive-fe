"use client";

import { useMemo, useState } from "react";
import { useMediaQuery } from "react-responsive";

import { useDailyDomainData } from "./useDomainData";

export const DAYS_OF_WEEK = [
  {
    id: "monday",
    name: "Mon"
  },
  {
    id: "tuesday",
    name: "Tue"
  },
  {
    id: "wednesday",
    name: "Wed"
  },
  {
    id: "thursday",
    name: "Thu"
  },
  {
    id: "friday",
    name: "Fri"
  },
  {
    id: "saturday",
    name: "Sat"
  },
  {
    id: "sunday",
    name: "Sun"
  }
];

export const CITY_NUM_ARRAY = [1, 2, 3, 4, 5, 6, "all"];

export const useDomainState = () => {
  const isLg = useMediaQuery({ minWidth: 1024 });
  const [selectedDay, setSelectedDay] = useState(DAYS_OF_WEEK[0].id);
  const [selectedCity, setSelectedCity] = useState(CITY_NUM_ARRAY[0]);

  const { data: dailyDomains } = useDailyDomainData();
  const filteredDomains = useMemo(() => {
    const domainsForDay = dailyDomains.find(
      (domain) => domain.day === selectedDay
    );
    const domainsForCity = domainsForDay?.domains.filter(
      (domain) => domain.city === selectedCity || selectedCity === "all"
    );
    return domainsForCity
      ? [...domainsForCity].sort((a, b) => a.city - b.city)
      : [];
  }, [dailyDomains, selectedDay, selectedCity]);

  return {
    selectedDay,
    setSelectedDay,
    selectedCity,
    setSelectedCity,
    filteredDomains,
    isLg
  };
};
