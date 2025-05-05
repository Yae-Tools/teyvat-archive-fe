import Image from "next/image";
import React from "react";

import ButtonGroup from "~/components/common/basic/buttonGroup";
import { CITY_NUM_ARRAY } from "~/hooks/domain/useDomainState";
import { getRegionImageByNumber } from "~/utils/regionImagePicker";

type Props = {
  selectedCity: number | string;
  setSelectedCity: (city: number | string) => void;
};

export default function CitySelector({
  selectedCity,
  setSelectedCity
}: Readonly<Props>) {
  return (
    <ButtonGroup
      items={CITY_NUM_ARRAY.map((city) => ({
        value: city,
        id: city,
        label: (
          <div className="flex flex-row items-center justify-center xl:p-1">
            {typeof city === "string" ? (
              "All"
            ) : (
              <Image
                src={getRegionImageByNumber(city)}
                alt="region"
                width={100}
                height={100}
                className="size-4.5 xl:size-8"
              />
            )}
          </div>
        ),
        isSelected: selectedCity === city,
        onClick: (value) => setSelectedCity(value)
      }))}
      selectedItem={selectedCity}
      customHeight="8"
    />
  );
}
