import { useAtomValue } from "jotai";
import { useState } from "react";
import Modal from "react-modal";

import { themeAtom } from "~/atoms/general.atoms";
import ButtonGroup from "~/components/common/basic/buttonGroup";
import TeyvatHeading from "~/components/common/teyvatHeading";
import { SETTINGS_CATEGORIES } from "~/data/settingsData";

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  onRequestClose?: () => void;
};

export default function SettingsModal({
  isOpen,
  onRequestClose
}: Readonly<Props>) {
  const theme = useAtomValue(themeAtom);

  const [selectedCategory, setSelectedCategory] = useState(
    SETTINGS_CATEGORIES[0].id
  );

  const item = SETTINGS_CATEGORIES.find((cat) => cat.id === selectedCategory);
  if (!item) return null;

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: `${
        theme === "light" ? "var(--color-slate-200)" : "var(--color-slate-900)"
      }`,
      outline: "none",
      border: `${
        theme === "light" ? "var(--color-slate-300)" : "var(--color-slate-900)"
      } 2px solid`,
      borderRadius: "0.5rem"
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.85)",
      zIndex: 1000
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Teyvat Archive Settings"
    >
      <div className="w-usable max-h-[500px] min-h-[200px] max-w-[750px] bg-slate-200 dark:bg-slate-900">
        <TeyvatHeading headerLevel={4} title="Teyvat Archive Settings" />
        <div className="my-2 flex w-full flex-col items-center justify-between">
          <ButtonGroup
            items={SETTINGS_CATEGORIES.map((data) => ({
              id: data.id,
              label: data.title,
              value: data.id,
              onClick: (itm: string) => setSelectedCategory(itm)
            }))}
            selectedItem={selectedCategory}
          />
        </div>
        <button className="flex w-full items-center justify-start space-x-2 border-b-1 border-gray-200 pb-2 text-sm font-medium text-gray-700 dark:border-gray-700 dark:text-gray-200">
          {item.icon && <item.icon className="primary-text size-6" />}
          <label className="primary-text font-enka text-sm">{item.title}</label>
        </button>
        <div className="mx-4 my-2 md:mx-8 lg:mx-12">
          {item.content && <item.content />}
        </div>
      </div>
    </Modal>
  );
}
