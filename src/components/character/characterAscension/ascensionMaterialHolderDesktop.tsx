"use client";

import { useEffect, useState } from "react";

import { getMaterialById } from "~/services/teyvatServer/teyvatArchive.service";
import { IMaterialData } from "~/types/enka/material.types";

import RarityStars from "../../common/rarityStars";

type Props = {
  id: string;
  value: string;
  index?: number;
};

export default function AscensionMaterialHolderDesktop({
  id,
  value,
  index
}: Readonly<Props>) {
  const [materialData, setMaterialData] = useState<IMaterialData>(
    {} as IMaterialData
  );

  const fetchMaterials = async () => {
    const mats = await getMaterialById(id);

    setMaterialData(mats);
  };

  useEffect(() => {
    fetchMaterials();
  }, [id]);

  return (
    <tr key={id} className="border-b border-gray-300">
      <td className="w-1/3 py-2">
        <div className="flex w-full items-center justify-start">
          <img src={materialData?.icon} alt={id} className="mr-2 size-12" />
          <RarityStars stars={materialData?.stars} />
        </div>
      </td>

      <td className="w-1/3 py-2">{materialData?.name}</td>
      <td className="w-1/3 py-2 text-right">x {value}</td>
    </tr>
  );
}
