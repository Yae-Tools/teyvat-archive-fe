import { useEffect, useState } from "react";

import { IAbyssBlessing } from "~/types/enka/enka.types";

import TitleHeading from "../common/typography/titleHeading";

import AbyssItemToggle from "./abysItemToggle";
import BlessingItem from "./blessingItem";

type Props = {
  sortedAbyssBlessings: IAbyssBlessing[];
};

export default function AbyssBlessings({
  sortedAbyssBlessings
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
      <div className="my-4 grid w-full grid-cols-1 justify-items-center gap-4 md:grid-cols-3 lg:grid-cols-4">
        {viewingBlessings.map((blessing) => (
          <BlessingItem {...{ blessing }} key={blessing.id} />
        ))}
      </div>
    </div>
  );
}
