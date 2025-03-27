import React from "react";

type Props = {
  time: string;
  label: "Hour" | "Minute" | "Second";
};

export default function TimerItem({ time, label }: Readonly<Props>) {
  return (
    <div className="flex flex-col w-max items-center justify-center">
      <div className="size-20 flex items-center bg-slate-700 rounded-lg">
        <span className="text-5xl text-center font-semibold text-white w-full">
          {time}
        </span>
      </div>
      <span className="text-[#8486A9] right-[6px] text-sm text-center font-medium">
        {Number(time) - 1 === 1 ? label : label + "s"}
      </span>
    </div>
  );
}
