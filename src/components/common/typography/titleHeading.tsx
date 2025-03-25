import { memo } from "react";

type Props = {
  text: string;
  customClass?: string;
};

function TitleHeading({ text, customClass = "text-5xl" }: Readonly<Props>) {
  return <h4 className={customClass}>{text}</h4>;
}

export default memo(TitleHeading);
