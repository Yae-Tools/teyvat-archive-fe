import ShowcaseFilterContainer from "~/components/layout/container/showcaseFilterContainer";

import PageTitle from "../typography/pageTitle";

type Props = {
  pageName: string;
  itemCount?: number;
};

export default function TeyvatGridPageLoader({
  pageName,
  itemCount = 20
}: Readonly<Props>) {
  return (
    <>
      <ShowcaseFilterContainer isSticky>
        <div className="mt-3 flex w-full items-center justify-center xl:mb-4">
          <PageTitle title={pageName} />
        </div>
      </ShowcaseFilterContainer>
      <div
        className="flex w-full items-center justify-center overflow-hidden px-4 md:px-12"
        style={{ backgroundColor: "rgba(16, 24, 40, 0.3)" }}
      >
        <div className="xs:grid-cols-3 grid auto-cols-fr grid-cols-2 overflow-y-auto pt-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8">
          {Array.from({ length: itemCount }).map((_, index) => (
            <div className="animate-pulse" key={`loading-${index + 1}`}>
              <div className="m-3 h-[150px] w-[100px] overflow-hidden rounded-xl bg-slate-700 lg:w-[130px]" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
