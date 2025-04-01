type Props = {
  id: string;
  value: boolean;
  setValue: (value: boolean) => void;
  isDisabled?: boolean;
};

export default function ToggleItem({
  id,
  value,
  setValue,
  isDisabled = false
}: Readonly<Props>) {
  return (
    <>
      <input
        type="checkbox"
        id={id}
        checked={value}
        onChange={(e) => setValue(e.target.checked)}
        className="hidden"
        disabled={isDisabled}
      />
      <button
        className={`flex h-6 w-12 cursor-pointer items-center justify-between rounded-full p-1 transition-all duration-300 disabled:opacity-50 ${value ? "bg-teal-500" : "bg-gray-300"}`}
        disabled={isDisabled}
        onClick={() => setValue(!value)}
      >
        <div
          className={`h-4 w-4 rounded-full bg-white transition-all duration-300 ${
            value ? "translate-x-6 transform" : ""
          }`}
        />
      </button>
    </>
  );
}
