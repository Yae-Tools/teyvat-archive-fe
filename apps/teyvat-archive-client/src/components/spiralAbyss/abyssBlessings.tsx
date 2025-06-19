import { useEffect, useState } from "react";

import { IAbyssBlessing } from "~/types/enka/enka.types";

import TitleHeading from "../common/typography/titleHeading";

import AbyssItemToggle from "./abysItemToggle";
import BlessingItem from "./blessingItem";

type Props = {
  sortedAbyssBlessings: IAbyssBlessing[];
  isLoading: boolean;
};

export default function AbyssBlessings({
  sortedAbyssBlessings,
  isLoading
}: Readonly<Props>) {
  const recentBlessings = [...sortedAbyssBlessings].slice(0, 4);

  const [viewMore, setViewMore] = useState(false);
  const [viewingBlessings, setViewingBlessings] = useState(recentBlessings);

  useEffect(() => {
    if (viewMore) {
      setViewingBlessings(sortedAbyssBlessings);
    } else {
      setViewingBlessings(recentBlessings);
    }
  }, [viewMore, sortedAbyssBlessings]);

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="mb-2 flex w-full flex-col items-center justify-between md:flex-row">
        <div className="w-full md:w-1/5"></div>
        <TitleHeading
          text="Blessings of the Abyss"
          customClass="text-xl text-center w-full md:w-3/5"
        />
        <AbyssItemToggle
          {...{
            value: viewMore,
            setValue: setViewMore,
            label: "View More",
            id: "viewMore"
          }}
        />
      </div>
      {isLoading && (
        <div className="flex w-full items-center justify-center">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={`blessing-loader-${index + 1}`}
              className="mx-4 h-20 w-[100px] animate-pulse rounded-lg bg-slate-700"
            />
          ))}
        </div>
      )}
      <div className="my-4 grid w-full grid-cols-1 justify-items-center gap-4 md:grid-cols-3 lg:grid-cols-4">
        {viewingBlessings.map((blessing) => (
          <BlessingItem {...{ blessing }} key={blessing.id} />
        ))}
      </div>
    </div>
  );
}
