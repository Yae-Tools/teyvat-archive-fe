import Image from "next/image";

import { IAbyssPartyData } from "~/types/enka/enka.types";
import { getElementTypeImage } from "~/utils/elementalImagePicker";

import MiniIconContainer from "../layout/container/miniIconContainer";

type Props = {
  team: IAbyssPartyData;
};

export default function AbyssTeam({ team }: Readonly<Props>) {
  return (
    <div>
      <div className="grid w-full grid-cols-4 justify-items-center gap-2">
        {team.characters.map((char) => (
          <MiniIconContainer key={char.id} rarity={char.rarity} bgFlow="fromTo">
            <div className="relative flex h-full w-full flex-col items-center justify-end">
              <div className="absolute top-0 left-0 mt-[-5px] ml-[-5px] flex items-center p-2 text-white">
                <Image
                  src={getElementTypeImage(char.element)}
                  alt={char.element}
                  className="size-4 lg:size-5"
                />
              </div>
              <Image
                src={char.icon}
                alt={char.id}
                width={300}
                height={40}
                className="size-18"
              />
            </div>
          </MiniIconContainer>
        ))}
      </div>
    </div>
  );
}
