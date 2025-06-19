import { memo } from "react";

type Props = {
  text: string;
  textShadow?: boolean;
  customClass?: string;
};

function TextValue({ text, textShadow, customClass = "" }: Readonly<Props>) {
  return (
    <p
      className={customClass}
      style={{
        textShadow: textShadow ? "2px 2px 2px rgba(0, 0, 0, 0.9)" : ""
      }}
    >
      {text}
    </p>
  );
}

export default memo(TextValue);
