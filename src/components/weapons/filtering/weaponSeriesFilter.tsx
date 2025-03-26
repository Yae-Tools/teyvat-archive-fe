import { memo } from "react";

type Props = {
  series: {
    value: string;
    label: string;
    itemCount: number;
  }[];
  selectedSeries: string;
  setSelectedSeries: (series: string) => void;
};

function WeaponSeriesFilter({
  series,
  selectedSeries,
  setSelectedSeries,
}: Readonly<Props>) {
  return (
    <div className="w-full lg:w-max max-w-[300px] flex items-center justify-between p-2 mb-3 border-2 border-slate-600 rounded-lg h-[40px]">
      <div className="flex items-center w-full">
        <select
          className="text-sm bg-transparent text-white py-1 focus:outline-none w-full mx-2"
          onChange={(e) => setSelectedSeries(e.target.value)}
          value={selectedSeries}
        >
          <option className="bg-slate-800" value="all">
            All
          </option>
          {series
            .toSorted((a, b) => a.label.localeCompare(b.label))
            .map((series) => (
              <option
                className="bg-slate-800"
                key={series.value}
                value={series.value}
              >
                {series.label.replace(/_/g, " ")}
                {` (${series.itemCount})`}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
}

export default memo(WeaponSeriesFilter);
