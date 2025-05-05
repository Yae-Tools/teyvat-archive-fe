import Image from "next/image";

import { IRarityType } from "~/types/enka/enka.types";

import MiniIconContainer from "../layout/container/miniIconContainer";

type Props = {
  weapon: {
    id: string;
    icon: string;
    rarity: IRarityType;
  };
};

export default function MiniWeapon({ weapon }: Readonly<Props>) {
  return (
    <MiniIconContainer key={weapon.id} rarity={weapon.rarity} bgFlow="fromTo">
      <div className="relative flex h-full w-full flex-col items-center justify-end">
        <Image
          src={weapon.icon}
          alt={weapon.id}
          width={300}
          height={40}
          className="size-18"
        />
      </div>
    </MiniIconContainer>
  );
}
