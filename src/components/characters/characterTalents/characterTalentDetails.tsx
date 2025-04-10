import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import ButtonGroup from "~/components/common/basic/buttonGroup";
import { IAllTalent } from "~/types/enka/character.types";
import parseText from "~/utils/parsers/parseEnkaText";

import TalentStats from "./talentStats";

type Props = {
  selectedTalent?: IAllTalent;
};

export default function CharacterTalentDetails({
  selectedTalent
}: Readonly<Props>) {
  const [item, setItem] = useState("desc");

  useEffect(() => {
    setItem("desc");
  }, [selectedTalent]);

  if (selectedTalent) {
    return (
      <div className="flex w-full flex-col items-start justify-start rounded-lg bg-slate-700 px-8 py-4 text-xl text-white">
        <h2 className="font-algoindeEnka mb-4 text-3xl">
          {selectedTalent.name} {selectedTalent.isPassive ? "(Passive)" : ""}
        </h2>
        {selectedTalent.stats && (
          <div className="mb-4">
            <ButtonGroup
              items={[
                { name: "Description", id: "desc" },
                {
                  name: "Stats",
                  id: "stats"
                }
              ].map((data, index) => ({
                id: index,
                label: data.name,
                value: data.id,
                onClick: (itm: string) => setItem(itm)
              }))}
              selectedItem={item}
            />
          </div>
        )}
        <AnimatePresence mode="wait">
          <motion.div
            key={item}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2 }}
            className="w-full"
          >
            {item === "desc" && (
              <div
                className="w-full text-[16px]"
                dangerouslySetInnerHTML={{
                  __html: parseText(selectedTalent.description || "")
                }}
              />
            )}

            {item === "stats" && selectedTalent.stats && (
              <TalentStats {...{ selectedTalent }} />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col items-start justify-start rounded-lg bg-slate-700 px-8 py-4 text-xl text-white">
      <h2 className="font-algoindeEnka mb-4 text-3xl">Select a talent</h2>
    </div>
  );
}
