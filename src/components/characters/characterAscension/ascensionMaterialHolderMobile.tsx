"use client";

import { useEffect, useState } from "react";

import { getMaterialById } from "~/services/teyvatServer/teyvatArchive.service";
import { IMaterialData } from "~/types/enka/material.types";

import TextLabel from "../../common/typography/textLabel";
import TextValue from "../../common/typography/textValue";

type Props = {
  id: string;
  value: string;
  index?: number;
};

export default function AscensionMaterialHolderMobile({
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
    <div className="my-1 flex h-10 w-full items-center justify-start space-x-3 rounded-md bg-slate-700 px-2">
      <TextLabel label={materialData?.name} classNames="w-full" />
      <div
        className="flex w-1/4 items-center justify-end pt-1"
        style={{
          marginTop: "-6px"
        }}
      >
        <img
          src={materialData?.icon}
          alt={materialData?.name}
          width={40}
          style={{
            maxWidth: `${index === 0 ? "90%" : "100%"}`
          }}
        />
        <div className="mr-1 text-[12px] md:text-[15px]">x </div>
        <TextValue text={value} />
      </div>
    </div>
  );
}
