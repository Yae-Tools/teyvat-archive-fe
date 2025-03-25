import { memo } from "react";

import { ELEMENTS } from "~/data/teyvatData";
import ItemSeparator from "../../common/filters/itemSeparator";
import Image from "next/image";
import { getElementTypeImage } from "~/utils/elementalImagePicker";

type Props = {
  selectedElement: string;
  setSelectedElement: (element: string) => void;
};

function ElementFilter({
  selectedElement,
  setSelectedElement,
}: Readonly<Props>) {
  return (
    <div className="w-full lg:w-max flex items-center justify-between p-2 mb-3 max-w-[300px] border-2 border-slate-600 rounded-lg h-[40px]">
      {ELEMENTS.map((element, index) => (
        <div key={element} className="flex items-center">
          <button
            onClick={() => {
              if (selectedElement === element) {
                setSelectedElement("all");
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
                  selectedElement === element || selectedElement === "all"
                    ? "none"
                    : "grayscale(100%)",
              }}
            />
          </button>
          {index !== ELEMENTS.length - 1 && <ItemSeparator />}
        </div>
      ))}
    </div>
  );
}

export default memo(ElementFilter);
