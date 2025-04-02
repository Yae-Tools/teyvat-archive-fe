import { ChevronDown, ChevronUp, SlidersHorizontal } from "lucide-react";

type Props = {
  children: React.ReactNode;
  isFilterOpen: boolean;
  setIsFilterOpen: (isOpen: boolean) => void;
};

export default function FilterDropDown({
  children,
  isFilterOpen,
  setIsFilterOpen
}: Readonly<Props>) {
  return (
    <div className="inline-flex w-full items-center overflow-hidden rounded-md border bg-white dark:border-gray-800 dark:bg-gray-900">
      <div className="flex w-full items-center justify-start border-e px-4 py-2 text-sm/none text-gray-600 hover:bg-gray-50 hover:text-gray-700 dark:border-e-gray-800 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-200">
        <div className="flex items-center">
          <p>Filters</p>
          <SlidersHorizontal className="ml-2 size-4" />
        </div>

        <div className="flex w-full items-center justify-end space-x-1">
          {children}
        </div>
      </div>

      <button
        className="h-full p-2 text-gray-600 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-200"
        onClick={() => setIsFilterOpen(!isFilterOpen)}
      >
        {isFilterOpen ? (
          <ChevronUp className="size-4" />
        ) : (
          <ChevronDown className="size-4" />
        )}
      </button>
    </div>
  );
}
