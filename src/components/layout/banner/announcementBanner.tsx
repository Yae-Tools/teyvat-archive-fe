"use client";

type Props = {
  message: string;
};

export default function AnnouncementBanner({ message }: Readonly<Props>) {
  return (
    <div
      className="w-full bg-slate-800 px-4 py-2 text-teal-400"
      style={{ backgroundColor: "rgba(16, 24, 40, 0.8)" }}
    >
      <div className="flex w-full items-center justify-center space-x-2">
        {/* message */}
        <p className="text-center text-sm font-semibold">{message}</p>
      </div>
    </div>
  );
}
