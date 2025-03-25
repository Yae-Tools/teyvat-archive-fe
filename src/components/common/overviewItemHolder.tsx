import { memo } from "react";
import TextLabel from "./typography/textLabel";
import TextValue from "./typography/textValue";

type Props = {
  label: string;
  value: string;
  children?: React.ReactNode | React.ReactNode[];
  textShadowLabel?: boolean;
  textShadowValue?: boolean;
  labelCustomClass?: string;
  valueCustomClass?: string;
  align?: "start" | "center" | "end";
};

function OverviewItemHolder({
  label,
  value,
  children,
  textShadowLabel = false,
  textShadowValue = false,
  labelCustomClass = "uppercase",
  valueCustomClass = "text-slate-300 xl:text-white xl:text-xl font-semibold leading-4 xl:leading-5",
  align = "start",
}: Readonly<Props>) {
  return (
    <div
      className={`w-full max-w-[350px] flex flex-col justify-between items-${align} mx-1`}
    >
      <div
        className={`xl:py-1 xl:px-2 xl:rounded-md relative my-1 flex flex-col items-${align}`}
      >
        <TextLabel
          label={label}
          classNames={labelCustomClass}
          textShadow={textShadowLabel}
        />
        <div
          className={`flex justify-${align} items-center pt-1`}
          style={{
            marginTop: "-2px",
          }}
        >
          {children}
          <TextValue
            text={value}
            textShadow={textShadowValue}
            customClass={valueCustomClass}
          />
        </div>
      </div>
    </div>
  );
}

export default memo(OverviewItemHolder);
