import { IAllTalent } from "~/types/enka/character.types";
import parseText from "~/utils/parsers/parseEnkaText";

type Props = {
  selectedTalent?: IAllTalent;
};

export default function CharacterTalentDetails({
  selectedTalent,
}: Readonly<Props>) {
  if (selectedTalent) {
    return (
      <div className="w-full flex flex-col items-start justify-start text-white text-xl bg-slate-700 px-8 py-4 rounded-lg">
        <h2 className="font-algoindeEnka text-3xl mb-4">
          {selectedTalent.name} {selectedTalent.isPassive ? "(Passive)" : ""}
        </h2>
        <div>
          <div
            className="w-full"
            dangerouslySetInnerHTML={{
              __html: parseText(selectedTalent.description || ""),
            }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-start justify-start text-white text-xl bg-slate-700 px-8 py-4 rounded-lg">
      <h2 className="font-algoindeEnka text-3xl mb-4">Select a talent</h2>
    </div>
  );
}
