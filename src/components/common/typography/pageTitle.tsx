import { memo } from "react";

type Props = {
  title: string;
  customClass?: string;
};

function PageTitle({
  title,
  customClass = "my-2 text-3xl xl:text-5xl px-4 text-center",
}: Readonly<Props>) {
  return <h1 className={customClass}>{title}</h1>;
}

export default memo(PageTitle);
