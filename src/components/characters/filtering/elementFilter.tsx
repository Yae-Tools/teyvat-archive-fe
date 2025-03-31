import { memo } from "react";

import { ELEMENTS_ARRAY } from "~/data/teyvatData";
import ItemSeparator from "../../common/filters/itemSeparator";
import Image from "next/image";
import { getElementTypeImage } from "~/utils/elementalImagePicker";
import { IElementType } from "~/types/enka/enka.types";

type Props = {
  selectedElement: IElementType | null;
  setSelectedElement: (element: IElementType | null) => void;
};

function ElementFilter({
  selectedElement,
  setSelectedElement,
}: Readonly<Props>) {
  return (
    <div className="w-full lg:w-max flex items-center justify-between p-2 mb-3 max-w-[300px] border-2 border-slate-600 rounded-lg h-[40px]">
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
            className="cursor-pointer mx-2"
          >
            <Image
              src={getElementTypeImage(element)}
              alt={element}
              className="w-[30px]"
              style={{
                filter:
                  selectedElement === element || !selectedElement
                    ? "none"
                    : "grayscale(100%)",
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
