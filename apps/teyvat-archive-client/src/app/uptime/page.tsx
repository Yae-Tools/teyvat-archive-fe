"use client";

import { ChevronDown } from "lucide-react";

import PageTitle from "~/components/common/typography/pageTitle";
import { useUptimeData } from "~/hooks/useUptimeData";

const monitors = [
  {
    name: "Web Server long Name",
    url: "www.somain.com",
    uptime: 95.8,
    frequency: "60s",
    notify: "abrizgalov@gmail.com",
    status: "online",
    uptimeData: Array.from({ length: 100 }, (_, i) =>
      Math.random() > 0.05 ? "up" : "down"
    )
  },
  {
    name: "Web Server long Name 2",
    url: "srv2.somain.com",
    uptime: 97.33,
    frequency: "100s",
    notify: "",
    status: "online",
    uptimeData: Array.from({ length: 100 }, (_, i) =>
      Math.random() > 0.03 ? "up" : "down"
    )
  },
  {
    name: "Web Server long Name 3",
    url: "srv2.somain.com",
    uptime: 74.95,
    frequency: "60s",
    notify: "",
    status: "warning",
    uptimeData: Array.from({ length: 100 }, (_, i) =>
      Math.random() > 0.25 ? "up" : "down"
    )
  }
];

export default function UptimePage() {
  const { data: uptimeData } = useUptimeData();

  const operationalServices = uptimeData
    ? Object.entries(uptimeData).filter(
        ([, instance]) => instance.status === "up"
      )
    : [];

  if (!uptimeData) {
    return (
      <div className="mt-3 flex w-full flex-col items-center justify-center xl:mb-4">
        <PageTitle title="Uptime Status" />
        <div className="w-usable p-2 md:p-6">
          <div className="text-center text-neutral-400">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-3 flex w-full flex-col items-center justify-center xl:mb-4">
      <PageTitle title="Uptime Status" />
      <div className="w-usable p-2 md:p-6">
        {/* x/y is operational // all systems operational // all systems are down */}
        <div className="mb-4 flex items-center justify-between">
          <div className="text-sm text-neutral-400">
            {operationalServices.length} of {Object.keys(uptimeData).length}{" "}
            services operational
          </div>
          <div className="text-sm text-neutral-400">
            Last updated: {new Date().toLocaleTimeString()}
          </div>
        </div>

        <div className="shadow-sm">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {monitors.map((monitor, index) => (
              <div
                key={index}
                className="flex flex-col rounded-lg border border-neutral-700 bg-slate-900/70 p-4 shadow-lg transition-all duration-200"
              >
                <div className="flex w-full flex-col space-y-4">
                  <div className="flex items-center space-x-4">
                    <div>
                      <div className="text-sm text-white">{monitor.name}</div>
                      <div className="text-sm text-neutral-300">
                        {monitor.url}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-8">
                    {/* Uptime Circle */}
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
                            monitor.uptime > 90
                              ? "#10b981"
                              : monitor.uptime > 75
                                ? "#f59e0b"
                                : "#ef4444"
                          }
                          strokeWidth="2"
                          strokeDasharray={`${monitor.uptime}, 100`}
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-xs text-gray-500">UPTIME</div>
                          <div className="text-sm font-semibold">
                            {monitor.uptime}%
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-4 gap-4 text-sm">
                      <div>
                        <div className="text-gray-500">Frequency</div>
                        <div className="flex items-center font-medium">
                          {monitor.frequency}
                          <ChevronDown className="ml-1 size-3" />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Uptime Visualization */}
                  <div className="max-w-md flex-1">
                    <div className="flex h-8 space-x-px">
                      {monitor.uptimeData.map((status, i) => (
                        <div
                          key={i}
                          className={`w-[2px] flex-1 ${status === "up" ? "bg-green-300" : "bg-red-400"}`}
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
