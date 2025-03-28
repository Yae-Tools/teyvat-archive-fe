"use client";

import { useEffect, useState } from "react";
import { ClipboardList } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";

import { getRedeemCodes } from "~/services/system/system.service";
import yaeWispherIcon from "~/assets/icons/system/yae_wispher.png";

export default function RedeemCodes() {
  const [redeemCodes, setRedeemCodes] = useState<IRedeemCodeResponse>({
    active: [],
    inactive: [],
  });

  const fetchRedeemCodes = async () => {
    const data: IRedeemCodeResponse = await getRedeemCodes();
    setRedeemCodes(data);
  };

  const notify = (message: string) => {
    toast.success(message, {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: "dark",
      icon: <img src={yaeWispherIcon.src} alt="Yae Miko" className="w-8" />,
    });
  };

  useEffect(() => {
    fetchRedeemCodes();
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center space-y-4">
      <h2 className="text-2xl text-white text-center xl:text-left w-full">
        Redeem Codes
      </h2>
      <div className="w-full items-center justify-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-2 md:gap-2">
        {redeemCodes["active"].map((code) => (
          <div
            key={code.code}
            className="w-full px-4 py-2 bg-slate-800 rounded-lg flex items-center justify-between space-x-2"
            style={{
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.6)",
              backgroundColor: "rgba(16, 24, 40, 0.5)",
            }}
          >
            <p className="text-white font-semibold font-enka text-left w-full xl:text-sm 2xl:text-md">
              {code.code}
            </p>
            <ClipboardList
              className="w-6 h-6 text-white mx-auto cursor-pointer"
              onClick={() => {
                navigator.clipboard.writeText(code.code);
                notify("Code copied to clipboard!");
              }}
            />
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
}
