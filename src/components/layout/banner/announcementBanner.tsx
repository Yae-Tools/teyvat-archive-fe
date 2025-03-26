"use client";

type Props = {
  message: string;
};

export default function AnnouncementBanner({ message }: Readonly<Props>) {
  return (
    <div className="border-b bg-slate-800 px-4 py-2 text-teal-400 w-full">
      <div className="w-full flex items-center justify-center space-x-2">
        {/* message */}
        <p className="text-sm font-semibold text-center">{message}</p>
      </div>
    </div>
  );
}
