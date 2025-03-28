"use client";

import bg from "~/assets/images/bgs/teyvat-wallpaper.jpg";

import bdLeft from "~/assets/icons/system/bd-left.png";
import bdRight from "~/assets/icons/system/bd-right.png";
import Image from "next/image";

export default function ErrorPage() {
  return (
    <div
      className="w-svw h-svh text-white flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "darken",
        backgroundColor: "rgba(16, 24, 40, 0.5)",
      }}
    >
      <div
        className="flex flex-col items-center justify-center p-4 rounded-lg shadow-lg mx-2"
        style={{
          background: "linear-gradient(180deg, #2c2f3d 0%, #353D4F 100%)",
          backdropFilter: "blur(10px)",
        }}
      >
        <div className="flex items-center justify-center space-x-2">
          <Image src={bdLeft} alt="bd-left" />
          <h3 className="text-2xl text-center text-[#EBE4D8]">
            System Notification
          </h3>
          <Image src={bdRight} alt="bd-right" />
        </div>
        <div className="flex flex-col items-center justify-center space-y-2 mt-4">
          <h4 className="text-lg text-[#EBE4D8]">An error occurred</h4>
          <p className="text-sm text-gray-400">
            Please try refreshing the page or check your internet connection.
          </p>
          <div className="flex items-center justify-center mt-4">
            <button
              className="mt-4 px-4 py-2 font-enka bg-[#EBE4D8] text-gray-800 rounded-lg shadow-md hover:bg-gray-200 transition duration-300"
              onClick={() => window.location.reload()}
            >
              Refresh
            </button>
            {/* reset cache */}
            <button
              className="mt-4 px-4 py-2 font-enka bg-[#EBE4D8] text-gray-800 rounded-lg shadow-md hover:bg-gray-200 transition duration-300 ml-4"
              onClick={() => {
                localStorage.clear();
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
