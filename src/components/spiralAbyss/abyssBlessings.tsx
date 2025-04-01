import { IAbyssBlessing } from "~/types/enka/enka.types";

import TitleHeading from "../common/typography/titleHeading";

import BlessingItem from "./blessingItem";

type Props = {
  sortedAbyssBlessings: IAbyssBlessing[];
};

export default function AbyssBlessings({
  sortedAbyssBlessings
}: Readonly<Props>) {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <TitleHeading
        text="Blessings of the Abyss"
        customClass="text-xl text-center w-full"
      />
      <div className="mt-4 grid w-full grid-cols-1 justify-items-center gap-4 md:grid-cols-3 lg:grid-cols-4">
        {sortedAbyssBlessings.map((blessing) => (
          <BlessingItem {...{ blessing }} key={blessing.id} />
        ))}
      </div>
    </div>
  );
}
