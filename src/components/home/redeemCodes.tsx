"use client";

import Image from "next/image";
import { useEffect } from "react";
import { ClipboardList } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";

import { getRedeemCodes } from "~/services/system/system.service";
import yaeWhisperIcon from "~/assets/icons/system/yae_wispher.png";
import { IRedeemCodeResponse } from "~/types/enka/enka.types";
import RedeemCodeLoader from "../common/loaderHandlers/redeemCodeLoader";

export default function RedeemCodes() {
  const {
    data: redeemCodes,
    isError,
    isLoading,
  } = useQuery<IRedeemCodeResponse>({
    queryKey: ["redeemCodes"],
    queryFn: async () => {
      const data: IRedeemCodeResponse = await getRedeemCodes();
      return data;
    },
    refetchInterval: 1000 * 60 * 10, // 10 minutes
  });

  const fetchRedeemCodes = async () => {
    const data: IRedeemCodeResponse = await getRedeemCodes();
    return data;
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
      icon: (
        <Image
          src={yaeWhisperIcon.src}
          alt="Yae Miko"
          className="w-8"
          width={100}
          height={100}
        />
      ),
    });
  };

  useEffect(() => {
    fetchRedeemCodes();
  }, []);

  if (isLoading) {
    return (
      <RedeemCodeLayout>
        <RedeemCodeLoader/> 
      </RedeemCodeLayout>
    );
  }
  if (isError) {
    return (
      <RedeemCodeLayout>
        <div className="w-full flex items-center justify-center">
          <p className="text-white">Error fetching redeem codes.</p>
        </div>
        <div className="w-full flex items-center justify-center">
          <p className="text-white">Please try again later.</p>
        </div>
      </RedeemCodeLayout>
    );
  }
  if (!redeemCodes || redeemCodes["active"].length === 0) {
    return (
      <RedeemCodeLayout>
        <div className="w-full flex items-center justify-center">
          <p className="text-white">No active redeem codes available.</p>
        </div>
        <div className="w-full flex items-center justify-center">
          <p className="text-white">Check back later for new codes!</p>
        </div>
      </RedeemCodeLayout>
    );
  }

  return (
    <RedeemCodeLayout>
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
    </RedeemCodeLayout>
  );
}

type RedeemCodeLayoutProps = {
  children: React.ReactNode;
};

const RedeemCodeLayout = ({ children }: Readonly<RedeemCodeLayoutProps>) => {
  return (
    <div className="w-full flex flex-col items-center justify-center space-y-4">
      <h2 className="text-2xl text-white text-center xl:text-left w-full">
        Redeem Codes
      </h2>
      {children}
      <ToastContainer />
    </div>
  );
};
