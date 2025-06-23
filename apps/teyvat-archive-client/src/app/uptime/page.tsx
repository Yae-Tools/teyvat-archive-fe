"use client";

import PageTitle from "~/components/common/typography/pageTitle";
import { useUptimeData, useUptimeHistory } from "~/hooks/useUptimeData";
import { Histories } from "~/types/system.types";
import {
  getAvgResponse,
  getLogData,
  getPercent,
  getUptimeSiteName,
  getUptimeSiteUrl
} from "~/utils/parsers/uptimeDataParser";

export default function UptimePage() {
  const { data: uptimeData } = useUptimeData();
  const histories = {
    api: useUptimeHistory("api").data,
    cdn: useUptimeHistory("cdn").data,
    dashboard: useUptimeHistory("dashboard").data,
    main: useUptimeHistory("main").data
  };

  // Loading state
  if (
    !uptimeData ||
    !histories.api ||
    !histories.cdn ||
    !histories.dashboard ||
    !histories.main
  ) {
    return (
      <div className="mt-3 flex w-full flex-col items-center justify-center xl:mb-4">
        <PageTitle title="Uptime Status" />
        <div className="w-usable p-2 md:p-6">
          <div className="text-center text-neutral-400">Loading...</div>
        </div>
      </div>
    );
  }

  const uptimeInstances = Object.entries(uptimeData).map(([name, data]) => ({
    name,
    status: data.status,
    responseTime: data.responseTime,
    statusCode: data.statusCode,
    timestamp: new Date(data.timestamp).toLocaleString()
  }));

  const operationalServices = Object.values(uptimeData).filter(
    (i) => i.status === "up"
  );

  return (
    <div className="mt-3 flex w-full flex-col items-center justify-center xl:mb-4">
      <PageTitle title="Uptime Status" />
      <div className="w-usable p-2 md:p-6">
        {/* Status summary */}
        <div className="mb-4 flex flex-col items-center space-y-2">
          <div className="text-center text-sm text-neutral-400">
            {operationalServices.length} of {Object.keys(uptimeData).length}{" "}
            services operational
          </div>
          <div className="text-center text-sm text-neutral-400">
            Last updated: {new Date().toLocaleTimeString()}
          </div>
        </div>

        {/* Uptime cards */}
        <div className="shadow-sm">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {uptimeInstances.map((instance) => (
              <div
                key={instance.name}
                className="flex flex-col rounded-lg border border-neutral-700 bg-slate-900/70 p-4 shadow-lg transition-all duration-200"
              >
                <div className="flex w-full flex-col space-y-4">
                  <div className="flex items-center space-x-4">
                    <div>
                      <div className="text-sm text-white">
                        {getUptimeSiteName(instance.name)}
                      </div>
                      <div className="text-xs text-neutral-300 md:text-sm">
                        {getUptimeSiteUrl(instance.name)}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-8">
                    <div className="relative size-16 md:size-20">
                      <svg
                        className="size-16 -rotate-90 transform md:size-20"
                        viewBox="0 0 36 36"
                      >
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#e5e7eb"
                          strokeWidth="2"
                        />
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke={
                            getPercent(instance.name, histories as Histories) >
                            90
                              ? "#10b981"
                              : getPercent(
                                    instance.name,
                                    histories as Histories
                                  ) > 75
                                ? "#f59e0b"
                                : "#ef4444"
                          }
                          strokeWidth="2"
                          strokeDasharray={`${getPercent(instance.name, histories as Histories)}, 100`}
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-xs text-gray-500">UPTIME</div>
                          <div className="text-sm font-semibold">
                            {getPercent(instance.name, histories as Histories)}%
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4 text-sm">
                      <div>
                        <div className="text-gray-500">
                          Average Response Time
                        </div>
                        <div className="flex items-center font-medium">
                          <span className="text-green-400">
                            {getAvgResponse(
                              instance.name,
                              histories as Histories
                            )}{" "}
                            ms
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="max-w-md flex-1">
                    <div className="flex h-8 space-x-px">
                      {getLogData(instance.name, histories as Histories)
                        .slice(0, 100)
                        .map((status: any, i: number) => (
                          <div
                            key={status.timestamp + i}
                            className={`w-[2px] flex-1 ${status.status === "up" ? "bg-green-300" : "bg-red-400"}`}
                          />
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
