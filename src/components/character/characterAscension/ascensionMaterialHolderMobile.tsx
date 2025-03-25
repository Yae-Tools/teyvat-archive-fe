"use client";

import { useEffect, useState } from "react";

import { getMaterialById } from "~/services/teyvatServer/teyvatArchive.service";
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
  index,
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
    <div className="w-full flex items-center justify-start space-x-3 my-1 bg-slate-700 rounded-md px-2 h-10">
      <TextLabel label={materialData?.name} classNames="w-full" />
      <div
        className="flex justify-end items-center pt-1 w-1/4"
        style={{
          marginTop: "-6px",
        }}
      >
        <img
          src={materialData?.icon}
          alt={materialData?.name}
          width={40}
          style={{
            maxWidth: `${index === 0 ? "90%" : "100%"}`,
          }}
        />
        <div className="text-[12px] md:text-[15px] mr-1">x </div>
        <TextValue text={value} />
      </div>
    </div>
  );
}
