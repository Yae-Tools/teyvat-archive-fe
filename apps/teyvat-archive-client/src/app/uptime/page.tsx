import PageTitle from "~/components/common/typography/pageTitle";

export default function UptimePage() {
  return (
    <div className="mt-3 flex w-full flex-col items-center justify-center xl:mb-4">
      <PageTitle title="Uptime Status" />
      {/* <div>Overall Uptime</div> */}
      <div className="mt-4 flex w-full flex-col items-center justify-center gap-4 px-4 xl:w-1/2">
        <div className="w-full rounded-lg border-2 border-amber-300">
          Teyvat Archive
        </div>
        <div className="w-full rounded-lg border-2 border-amber-300">
          Teyvat Archive Server
        </div>
        <div className="w-full rounded-lg border-2 border-amber-300">
          Teyvat Archive Dashboard
        </div>
        <div className="w-full rounded-lg border-2 border-amber-300">
          Teyvat Archive CDN
        </div>
      </div>
    </div>
  );
}
