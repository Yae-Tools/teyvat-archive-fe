import { memo } from "react";

type Props = {
  label: string;
  classNames?: any;
  textShadow?: boolean;
};

function TextLabel({ label, classNames, textShadow }: Readonly<Props>) {
  return (
    <label
      className={`font-bold tracking-wide text-sm text-[#c4c4c4] xl:text-gray-200 xl:text-md leading-4 font-enka ${classNames}`}
      style={{
        textShadow: textShadow ? "2px 2px 2px rgba(0, 0, 0, 0.9)" : "",
      }}
    >
      {label}
    </label>
  );
}

export default memo(TextLabel);
