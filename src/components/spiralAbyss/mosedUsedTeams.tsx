import TitleHeading from "../common/typography/titleHeading";

export default function MostUsedTeams() {
  return (
    <div className="flex w-full max-w-[1000px] flex-col items-center justify-center">
      <TitleHeading
        text="Top 4 Team Comps"
        customClass="text-xl text-center w-full"
      />
      <div className="my-4 grid w-full grid-cols-1 justify-items-center gap-4 md:grid-cols-2">
        <div className="w-full outline-1 outline-amber-300">1st Half</div>
        <div className="w-full outline-1 outline-amber-300">2nd Half</div>
      </div>
    </div>
  );
}
