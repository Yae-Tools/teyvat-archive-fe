import TeyvatGridPageLoader from "~/components/common/loaderHandlers/teyvatGridPageLoader";

export default function Loading() {
  return <TeyvatGridPageLoader pageName="Teyvat Characters" itemCount={20} />;
}
