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
  setSelectedSeries
}: Readonly<Props>) {
  return (
    <div className="mb-3 flex h-[40px] w-full max-w-[300px] items-center justify-between rounded-lg border-2 border-slate-600 p-2 lg:w-max">
      <div className="flex w-full items-center">
        <select
          className="mx-2 w-full bg-transparent py-1 text-sm text-white focus:outline-none"
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
