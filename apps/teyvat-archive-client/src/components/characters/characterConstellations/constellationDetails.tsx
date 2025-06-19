import OptimizedImage from "~/components/common/basic/optimizedImage";
import { IConstellation } from "~/types/enka/character.types";
import parseText from "~/utils/parsers/parseEnkaText";

type Props = {
  selectedConstellation: IConstellation;
};

export default function ConstellationDetails({
  selectedConstellation
}: Readonly<Props>) {
  if (!selectedConstellation) return null;

  return (
    <div className="relative mt-10 flex h-[35rem] w-4/9 flex-col items-center justify-start rounded-lg bg-slate-700 px-6 py-8">
      <h6 className="w-full px-4 text-left text-3xl font-bold">
        {selectedConstellation.name}
      </h6>
      <div
        className="z-10 mt-8 w-full overflow-y-auto px-4 text-left text-[16px]"
        dangerouslySetInnerHTML={{
          __html: parseText(selectedConstellation?.description)
        }}
      />

      <div className="absolute z-0 mt-[10rem] flex w-full items-center justify-center">
        <OptimizedImage
          src={selectedConstellation.icon}
          alt={selectedConstellation.name}
          className="size-80"
          width={100}
          height={100}
          style={{
            filter: "blur(0.5px) brightness(0.5)"
          }}
        />
      </div>
    </div>
  );
}
