import { Tooltip } from "react-tooltip";
import { ITalent } from "~/types/enka/character.types";

import elementalColorPicker from "~/utils/elementalColorPicker";

type Props = {
  talent: ITalent;
  selectedTalentId: number;
  element: string;
  setSelectedTalentId: (id: number) => void;
};

export default function TalentIcon({
  talent,
  selectedTalentId,
  element,
  setSelectedTalentId,
}: Readonly<Props>) {
  const handleClick = () => {
    setSelectedTalentId(talent.id);
  };

  return (
    <button
      className="w-max flex items-center justify-start cursor-pointer"
      onClick={handleClick}
    >
      <div
        data-tooltip-id="talent-tooltip"
        data-tooltip-content={selectedTalentId !== talent.id ? talent.name : ""}
        className={`w-16 h-16 rounded-full flex items-center justify-center bg-opacity-10 cursor-pointer transition-all duration-200 ${
          selectedTalentId !== talent.id && "hover:!bg-slate-700"
        }`}
        style={{
          backgroundColor:
            selectedTalentId === talent.id
              ? elementalColorPicker(element)
              : "rgb(30 41 59)",
        }}
      >
        <img
          src={talent.icon}
          alt={talent.name}
          width={60}
          style={{
            filter:
              selectedTalentId === talent.id
                ? "brightness(1)"
                : "brightness(0.5)",
          }}
        />
      </div>
      <Tooltip id="talent-tooltip" />
    </button>
  );
}
