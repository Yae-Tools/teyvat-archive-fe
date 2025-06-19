"use client";

type Props = {
  time: string;
  label: "Hour" | "Minute" | "Second";
};

export default function TimerItem({ time, label }: Readonly<Props>) {
  return (
    <div className="flex w-max flex-col items-center justify-center">
      <div className="flex size-20 items-center rounded-lg bg-slate-700">
        <span className="w-full text-center text-5xl font-semibold text-white">
          {time}
        </span>
      </div>
      <span className="right-[6px] text-center text-sm font-medium text-[#8486A9]">
        {Number(time) - 1 === 1 ? label : label + "s"}
      </span>
    </div>
  );
}
