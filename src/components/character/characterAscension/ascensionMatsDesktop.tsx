"use client";

import { IAscensionData } from "~/types/enka/character.types";

import AttributeDesktopContainer from "../../layout/container/attributeDesktopContainer";

import AscensionMaterialHolderDesktop from "./ascensionMaterialHolderDesktop";

type Props = {
  ascensionData: IAscensionData[];
};

export default function AscensionMatsDesktop({
  ascensionData
}: Readonly<Props>) {
  const itemsMap = ascensionData
    ?.flatMap((ascData) => ascData.costItems)
    .filter((item) => item.id)
    ?.reduce(
      (acc, { id, count }) => {
        acc[id] = (acc[id] || 0) + count;
        return acc;
      },
      {} as { [id: string]: number }
    );

  const itemsArray = Object.entries(itemsMap);

  return (
    <AttributeDesktopContainer title="Ascension Materials">
      <div className="my-4 w-full px-2">
        <table className="w-full">
          <tbody>
            {ascensionData ? (
              itemsArray.map(([id, count], index) => {
                if (!id || !count) return null;
                return (
                  <AscensionMaterialHolderDesktop
                    id={id}
                    value={count.toString()}
                    index={index}
                    key={id}
                  />
                );
              })
            ) : (
              <tr>
                <td>Loading Ascension data</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </AttributeDesktopContainer>
  );
}
