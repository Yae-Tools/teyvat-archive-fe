import { IConstellation } from "~/types/enka/character.types";
import parseText from "~/utils/parsers/parseEnkaText";

type Props = {
  selectedConstellation: IConstellation;
};

export default function ConstellationDetails({
  selectedConstellation,
}: Readonly<Props>) {
  if (!selectedConstellation) return null;

  return (
    <div className="w-4/9 flex flex-col items-center justify-start rounded-lg bg-slate-700 h-[35rem] mt-10 py-8 px-6 relative">
      <h6 className="text-3xl px-4 font-bold text-left w-full">
        {selectedConstellation.name}
      </h6>
      <div
        className="mt-8 text-lg text-left px-4 w-full z-10"
        dangerouslySetInnerHTML={{
          __html: parseText(selectedConstellation?.description),
        }}
      />

      <div className="absolute w-full flex items-center justify-center z-0 mt-[10rem]">
        <img
          src={selectedConstellation.icon}
          alt={selectedConstellation.name}
          className="size-80"
          style={{
            filter: "blur(0.5px) brightness(0.5)",
          }}
        />
      </div>
    </div>
  );
}
