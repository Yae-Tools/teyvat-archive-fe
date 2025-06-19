import Image from "next/image";
import { memo } from "react";

import { ELEMENTS_ARRAY } from "~/data/teyvatData";
import { IElementType } from "~/types/enka/enka.types";
import { getElementTypeImage } from "~/utils/elementalImagePicker";

import ItemSeparator from "../../common/filters/itemSeparator";

type Props = {
  selectedElement: IElementType | null;
  setSelectedElement: (element: IElementType | null) => void;
};

function ElementFilter({
  selectedElement,
  setSelectedElement
}: Readonly<Props>) {
  return (
    <div className="mb-3 flex h-[40px] w-full max-w-[300px] items-center justify-between rounded-lg border-2 border-slate-600 p-2 lg:w-max">
      {ELEMENTS_ARRAY.map((element, index) => (
        <div key={element} className="flex items-center">
          <button
            onClick={() => {
              if (selectedElement === element) {
                setSelectedElement(null);
              } else {
                setSelectedElement(element);
              }
            }}
            className="mx-2 cursor-pointer"
          >
            <Image
              src={getElementTypeImage(element)}
              alt={element}
              className="w-[30px]"
              style={{
                filter:
                  selectedElement === element || !selectedElement
                    ? "none"
                    : "grayscale(100%)"
              }}
            />
          </button>
          {index !== ELEMENTS_ARRAY.length - 1 && <ItemSeparator />}
        </div>
      ))}
    </div>
  );
}

export default memo(ElementFilter);
