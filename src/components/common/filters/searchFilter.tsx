import { Search } from "lucide-react";

type Props = {
  searchValue: string;
  setSearchValue: (value: string) => void;
  placeholder?: string;
};

export default function SearchFilter({
  searchValue,
  setSearchValue,
  placeholder = "Search",
}: Readonly<Props>) {
  return (
    <div className="w-full lg:w-max flex items-center justify-between p-2 mb-3 max-w-[300px] border-2 border-slate-600 rounded-lg h-[40px]">
      <div className="w-full flex items-center justify-start space-x-2">
        <Search className="size-4 mr-2" />
        <input
          type="text"
          className="h-full outline-none bg-transparent text-white placeholder-gray-400"
          placeholder={placeholder}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
    </div>
  );
}
