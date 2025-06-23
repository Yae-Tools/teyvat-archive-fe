"use client";

import { ChevronDown, ChevronRight, Plus } from "lucide-react";
import { useState } from "react";

import PageTitle from "~/components/common/typography/pageTitle";

const monitors = [
  {
    name: "Web Server long Name",
    url: "www.somain.com",
    uptime: 95.8,
    type: "HTTP",
    frequency: "60s",
    notify: "abrizgalov@gmail.com",
    recheck: "Off",
    status: "online",
    uptimeData: Array.from({ length: 100 }, (_, i) =>
      Math.random() > 0.05 ? "up" : "down"
    )
  },
  {
    name: "Web Server long Name 2",
    url: "srv2.somain.com",
    uptime: 97.33,
    type: "HTTP",
    frequency: "100s",
    notify: "",
    recheck: "On",
    status: "online",
    uptimeData: Array.from({ length: 100 }, (_, i) =>
      Math.random() > 0.03 ? "up" : "down"
    )
  },
  {
    name: "Web Server long Name 3",
    url: "srv2.somain.com",
    uptime: 74.95,
    type: "HTTP",
    frequency: "60s",
    notify: "",
    recheck: "Off",
    status: "warning",
    uptimeData: Array.from({ length: 100 }, (_, i) =>
      Math.random() > 0.25 ? "up" : "down"
    )
  }
];

export default function UptimePage() {
  const [expandedMonitors, setExpandedMonitors] = useState<number[]>([0, 1]);

  const toggleMonitor = (index: number) => {
    setExpandedMonitors((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="mt-3 flex w-full flex-col items-center justify-center xl:mb-4">
      <PageTitle title="Uptime Status" />
      <div className="p-2 md:p-6 w-usable">
        <div className="rounded-lg bg-white shadow-sm">
          <div className="divide-y divide-gray-200">
            {monitors.map((monitor, index) => (
              <div key={index} className="p-2 md:p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => toggleMonitor(index)}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      {expandedMonitors.includes(index) ? (
                        <ChevronDown className="size-5" />
                      ) : (
                        <ChevronRight className="size-5" />
                      )}
                    </button>

                    <div>
                      <div className="text-sm text-gray-900">
                        {monitor.name}
                      </div>
                      <div className="text-sm text-gray-500">{monitor.url}</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-8">
                    {/* Uptime Circle */}
                    <div className="relative size-16 md:size-20">
                      <svg
                        className="size-16 md:size-20 -rotate-90 transform"
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

                    {expandedMonitors.includes(index) && (
                      <div className="grid grid-cols-4 gap-4 text-sm">
                        <div>
                          <div className="text-gray-500">Type</div>
                          <div className="font-medium">{monitor.type}</div>
                        </div>
                        <div>
                          <div className="text-gray-500">Frequency</div>
                          <div className="flex items-center font-medium">
                            {monitor.frequency}
                            <ChevronDown className="ml-1 size-3" />
                          </div>
                        </div>
                        <div>
                          <div className="text-gray-500">Recheck</div>
                          <div className="font-medium">{monitor.recheck}</div>
                        </div>
                      </div>
                    )}

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
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
