import { IAbyssPartyData } from "~/types/enka/enka.types";
import MiniAvatar from "../common/miniAvatar";

type Props = {
  team: IAbyssPartyData;
};

export default function AbyssTeam({ team }: Readonly<Props>) {
  return (
    <div>
      <div className="grid w-full grid-cols-4 justify-items-center gap-2">
        {team.characters.map((char) => (
          <MiniAvatar key={char.id} char={char} />
        ))}
      </div>
    </div>
  );
}
