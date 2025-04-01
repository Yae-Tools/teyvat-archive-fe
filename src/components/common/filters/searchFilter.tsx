import { Search } from "lucide-react";

type Props = {
  searchValue: string;
  setSearchValue: (value: string) => void;
  placeholder?: string;
};

export default function SearchFilter({
  searchValue,
  setSearchValue,
  placeholder = "Search"
}: Readonly<Props>) {
  return (
    <div className="mb-3 flex h-[40px] w-full max-w-[300px] items-center justify-between rounded-lg border-2 border-slate-600 p-2 lg:w-max">
      <div className="flex w-full items-center justify-start space-x-2">
        <Search className="mr-2 size-4" />
        <input
          type="text"
          className="h-full bg-transparent text-white placeholder-gray-400 outline-none"
          placeholder={placeholder}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
    </div>
  );
}
