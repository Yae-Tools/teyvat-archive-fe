import AbyssIconLoader from "./abyssIconLoader";

export default function AbyssTeamLoader() {
  return (
    <div className="grid w-full grid-cols-4 justify-items-center gap-2">
      {Array.from({ length: 16 }, (_, index) => (
        <AbyssIconLoader key={index} />
      ))}
    </div>
  );
}
