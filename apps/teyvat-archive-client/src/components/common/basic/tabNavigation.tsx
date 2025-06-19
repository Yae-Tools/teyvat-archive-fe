import Image, { StaticImageData } from "next/image";
import { memo } from "react";

import selectedMarker from "~/assets/icons/1490.png";

type Props = {
  tabs: {
    name: string;
    id: string;
    shouldDisplay: boolean;
  }[];
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
  selectedIndicator?: StaticImageData;
};
function TabNavigation({
  tabs,
  selectedTab,
  setSelectedTab,
  selectedIndicator = selectedMarker
}: Readonly<Props>) {
  return (
    <div className="flex w-1/4 flex-col justify-between">
      <ul className="w-full space-y-1 pt-12 pb-6 pl-12">
        {tabs
          .filter((tab) => tab.shouldDisplay)
          .map((tab) => (
            <li key={tab.id} className="w-full">
              <button
                onClick={() => setSelectedTab(tab.id)}
                className={`font-enka flex w-full cursor-pointer items-center justify-start space-x-2 rounded-lg px-4 py-2 text-left text-lg font-medium text-white ${
                  selectedTab === tab.id
                    ? "bg-slate-700 hover:bg-slate-600"
                    : "bg-slate-800 hover:bg-slate-700"
                }`}
              >
                {selectedTab === tab.id && (
                  <Image
                    src={selectedIndicator}
                    alt="selected"
                    className="mr-2 size-6"
                    unoptimized
                  />
                )}

                {tab.name}
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default memo(TabNavigation);
