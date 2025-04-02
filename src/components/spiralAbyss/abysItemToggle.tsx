import ToggleItem from "../common/basic/toggleItem";

type Props = {
  value: boolean;
  setValue: (value: boolean) => void;
  label: string;
  id: string;
};

export default function AbyssItemToggle({
  value,
  setValue,
  label,
  id
}: Readonly<Props>) {
  return (
    <div className="w-full md:w-1/5">
      <div className="flex w-full items-center justify-center md:justify-end">
        <label htmlFor={id} className="mr-2 text-sm text-white">
          {label}
        </label>
        <ToggleItem id={id} value={value} setValue={setValue} />
      </div>
    </div>
  );
}
