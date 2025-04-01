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
  setSelectedConstellation,
}: Readonly<Props>) {
  return (
    <button
      className="absolute size-20 rounded-full cursor-pointer p-1 hover:bg-slate-700 transition-all duration-200"
      style={{
        transform: `rotate(${index * 60}deg) translate(0, 240px)`,
        background:
          selectedConstellation.id === constellation.id
            ? elementalColorPicker(element)
            : "var(--color-slate-800)",
      }}
      onClick={() => setSelectedConstellation(constellation)}
    >
      {/* add a bublle saying which constellation is is. Eg: C0 C1 C2 etc */}
      <div
        className="absolute size-6 rounded-full flex items-center justify-center bg-slate-400 text-white text-xs font-bold"
        style={{
          transform: `rotate(${-index * 60}deg)`,
        }}
      >
        <p
          style={{
            transform: `rotate(180deg)`,
          }}
        >
          C{index + 1}
        </p>
      </div>

      <div
        className="w-full h-full flex items-center justify-center"
        style={{
          transform: `rotate(${-index * 60}deg)`,
        }}
      >
        <div
          className="flex items-center justify-center"
          style={{
            transform: "rotate(180deg)",
          }}
        >
          <img
            src={constellation.icon}
            alt={constellation.name}
            style={{
              //overlay white color to make the icon more visible
              filter: "brightness(0) invert(1)",
            }}
          />
        </div>
      </div>
    </button>
  );
}
