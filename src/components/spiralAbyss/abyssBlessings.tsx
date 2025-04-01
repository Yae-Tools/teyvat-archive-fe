import { format } from "date-fns";
import { CalendarIcon, SwordsIcon } from "lucide-react";

import { IAbyssBlessing } from "~/types/enka/enka.types";
import { isCurrentBlessing } from "~/utils/parsers/abyssDataParser";
import parseText from "~/utils/parsers/parseEnkaText";

import TitleHeading from "../common/typography/titleHeading";

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
          <article
            className="max-w-[300px] rounded-lg bg-slate-700"
            key={blessing.id}
          >
            <div className="flex items-start p-4">
              <div>
                <h3 className="mb-2 font-medium sm:text-lg">{blessing.name}</h3>
                <div
                  className="text-sm text-white"
                  dangerouslySetInnerHTML={{
                    __html: parseText(blessing.description)
                  }}
                />
                <div className="mt-2 sm:flex sm:items-center sm:gap-2">
                  <div className="flex items-center gap-1 text-gray-500">
                    <CalendarIcon className="size-4 text-slate-200" />
                    <p className="text-xs text-slate-200">
                      {format(blessing.begin, "do 'of' MMM yyyy")}
                    </p>
                  </div>
                  <span className="hidden sm:block" aria-hidden="true">
                    ·
                  </span>
                  <div className="flex items-center gap-1 text-gray-500">
                    <p className="text-xs text-slate-200">
                      {format(blessing.end, "do 'of' MMM yyyy")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {isCurrentBlessing(blessing.begin, blessing.end) && (
              <div className="flex justify-end">
                <strong className="-me-[2px] -mb-[2px] inline-flex items-center gap-1 rounded-ss-xl rounded-ee-xl bg-teal-600 px-3 py-1.5 text-white">
                  <SwordsIcon className="size-4" />
                  <span className="text-sm font-medium">Current Blessing</span>
                </strong>
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
