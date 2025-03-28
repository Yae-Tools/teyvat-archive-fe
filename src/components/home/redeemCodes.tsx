"use client";

import { useEffect, useState } from "react";
import { getRedeemCodes } from "~/services/system/system.service";

export default function RedeemCodes() {
  const [redeemCodes, setRedeemCodes] = useState<IRedeemCodeResponse>({
    active: [],
    inactive: [],
  });

  const fetchRedeemCodes = async () => {
    const data: IRedeemCodeResponse = await getRedeemCodes();
    setRedeemCodes(data);
  };

  useEffect(() => {
    fetchRedeemCodes();
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center space-y-4">
      <h2 className="text-2xl text-white text-center xl:text-left w-full">
        Redeem Codes
      </h2>
      <div className="w-full items-center justify-center grid grid-cols-1 lg:grid-cols-2 lg:gap-2">
        {redeemCodes["active"].map((code) => (
          <div
            key={code.code}
            className="w-full px-4 py-2 bg-slate-800 rounded-lg"
            style={{
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.6)",
              backgroundColor: "rgba(16, 24, 40, 0.5)",
            }}
          >
            <p className="text-white font-semibold font-enka text-center w-full">
              {code.code}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
