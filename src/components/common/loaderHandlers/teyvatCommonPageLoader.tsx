import PageTitle from "../typography/pageTitle";

import DetailPageLoader from "./detailPageLoader";

type Props = {
  pageName: string;
};

export default function TeyvatCommonPageLoader({ pageName }: Readonly<Props>) {
  return (
    <div className="mt-3 flex w-full flex-col items-center justify-center xl:mb-4">
      <PageTitle title={pageName} />
      <DetailPageLoader />
    </div>
  );
}
