"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import AttributeDesktopContainer from "../../layout/container/attributeDesktopContainer";
import ConstellationDetails from "./constellationDetails";
import ConstellationIcon from "./constellationIcon";
import { IConstellation } from "~/types/enka/character.types";
import { IElementType } from "~/types/enka/enka.types";

type Props = {
  consName: string;
  constellations: IConstellation[];
  constellationIcon: string;
  element: IElementType;
};

export default function DesktopConstellationView({
  consName,
  constellations,
  constellationIcon,
  element,
}: Readonly<Props>) {
  const [selectedConstellation, setSelectedConstellation] =
    useState<IConstellation>(constellations?.[0]);

  useEffect(() => {
    setSelectedConstellation(constellations?.[0]);
  }, [constellations]);

  return (
    <AttributeDesktopContainer title={`Constellation - ${consName}`}>
      <div className="w-full flex items-start justify-between space-x-6">
        <div className="w-1/2 flex flex-col items-center justify-start pb-40">
          <div
            className="mt-40 min-h-max flex items-center justify-center w-full"
            style={{
              //rotate 180deg to make the first constellation at the top
              transform: "rotate(180deg)",
            }}
          >
            {constellations.map((con, i) => (
              <ConstellationIcon
                key={con.id}
                {...{
                  index: i,
                  constellation: con,
                  selectedConstellation,
                  setSelectedConstellation,
                  element,
                }}
              />
            ))}
            <Image
              src={constellationIcon}
              alt="CONSTELLATION ICON"
              className="size-60"
              style={{
                transform: "rotate(180deg)",
                zoom: "1.2",
                //convert to monochrome
                filter: `grayscale(100%) brightness(0) invert(1)`,
              }}
              width={400}
              height={100}
            />
          </div>
        </div>
        <ConstellationDetails selectedConstellation={selectedConstellation} />
      </div>
    </AttributeDesktopContainer>
  );
}
