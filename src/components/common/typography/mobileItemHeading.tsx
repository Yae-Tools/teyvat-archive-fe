import { memo } from "react";

type Props = {
  value: string;
};

function MobileItemHeading({ value }: Readonly<Props>) {
  return (
    <h5 className="font-bold text-sm text-slate-400 uppercase">{value}</h5>
  );
}

export default memo(MobileItemHeading);
