import ToggleItem from "../common/basic/toggleItem";

type Props = {
  isUsedByOwn: boolean;
  setIsUsedByOwn: (value: boolean) => void;
};

export default function USedByOwnToggle({
  isUsedByOwn,
  setIsUsedByOwn
}: Readonly<Props>) {
  return (
    <div className="w-full md:w-1/5">
      <div className="flex w-full items-center justify-end">
        <label htmlFor="usedByOwn" className="mr-2 text-sm text-white">
          Used By Own
        </label>
        <ToggleItem
          id="usedByOwn"
          value={isUsedByOwn}
          setValue={setIsUsedByOwn}
        />
      </div>
    </div>
  );
}
