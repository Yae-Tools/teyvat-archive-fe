import Image from "next/image";
import { Tooltip } from "react-tooltip";

import { IConstellation } from "~/types/enka/character.types";
import { IElementType } from "~/types/enka/enka.types";
import elementalColorPicker from "~/utils/elementalColorPicker";

type Props = {
  constellation: IConstellation;
  index: number;
  element: IElementType;
  selectedConstellation: IConstellation;
  setSelectedConstellation: (constellation: IConstellation) => void;
};

export default function ConstellationIcon({
  index,
  constellation,
  element,
  selectedConstellation,
  setSelectedConstellation
}: Readonly<Props>) {
  return (
    <button
      className="absolute size-20 cursor-pointer rounded-full p-1 transition-all duration-200 hover:bg-slate-700"
      style={{
        transform: `rotate(${index * 60}deg) translate(0, 240px)`,
        background:
          selectedConstellation.id === constellation.id
            ? elementalColorPicker(element)
            : "var(--color-slate-800)"
      }}
      onClick={() => setSelectedConstellation(constellation)}
    >
      {/* add a bublle saying which constellation is is. Eg: C0 C1 C2 etc */}
      <div
        className="absolute flex size-6 items-center justify-center rounded-full bg-slate-400 text-xs font-bold text-white"
        style={{
          transform: `rotate(${-index * 60}deg)`
        }}
      >
        <p
          style={{
            transform: `rotate(180deg)`
          }}
        >
          C{index + 1}
        </p>
      </div>

      <div
        className="flex h-full w-full items-center justify-center"
        style={{
          transform: `rotate(${-index * 60}deg)`
        }}
      >
        <div
          className="flex items-center justify-center"
          data-tooltip-id="constellation-tooltip"
          data-tooltip-content={
            selectedConstellation.id !== constellation.id
              ? constellation.name
              : ""
          }
          style={{
            transform: "rotate(180deg)"
          }}
        >
          <Image
            src={constellation.icon}
            alt={constellation.name}
            width={100}
            height={100}
            style={{
              //overlay white color to make the icon more visible
              filter: "brightness(0) invert(1)"
            }}
          />
          <Tooltip
            className="font-enka"
            id="constellation-tooltip"
            // hidden={selectedConstellation.id === constellation.id}
          />
        </div>
      </div>
    </button>
  );
}
