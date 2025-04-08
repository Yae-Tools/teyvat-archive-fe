"use client";

import bg from "~/assets/images/bgs/teyvat-wallpaper.jpg";
import TeyvatHeading from "~/components/common/teyvatHeading";

export default function ErrorPage() {
  return (
    <div
      className="flex h-svh w-svw flex-col items-center justify-center text-white"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "darken",
        backgroundColor: "rgba(16, 24, 40, 0.5)"
      }}
    >
      <div
        className="mx-2 flex flex-col items-center justify-center rounded-lg p-4 shadow-lg"
        style={{
          background: "linear-gradient(180deg, #2c2f3d 0%, #353D4F 100%)",
          backdropFilter: "blur(10px)"
        }}
      >
        <div className="flex items-center justify-center space-x-2">
          <TeyvatHeading headerLevel={3} title="System Notification" />
        </div>
        <div className="mt-4 flex flex-col items-center justify-center space-y-2">
          <h4 className="text-lg text-[#EBE4D8]">An error occurred</h4>
          <p className="text-sm text-gray-400">
            Please try refreshing the page or check your internet connection.
          </p>
          <div className="mt-4 flex items-center justify-center">
            <button
              className="font-enka mt-4 rounded-lg bg-[#EBE4D8] px-4 py-2 text-gray-800 shadow-md transition duration-300 hover:bg-gray-200"
              onClick={() => window.location.reload()}
            >
              Refresh
            </button>
            {/* reset cache */}
            <button
              className="font-enka mt-4 ml-4 rounded-lg bg-[#EBE4D8] px-4 py-2 text-gray-800 shadow-md transition duration-300 hover:bg-gray-200"
              onClick={() => {
                localStorage.clear();
                sessionStorage.clear();
                window.location.reload();
              }}
            >
              Reset Cache
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
