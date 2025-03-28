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
      <h2 className="text-2xl text-white text-center">Redeem Codes</h2>
      <div className="w-full flex flex-col items-center justify-center space-y-2">
        {redeemCodes["active"].map((code) => (
          <div
            key={code.code}
            className="w-full px-4 py-2 bg-slate-800 rounded-lg"
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
