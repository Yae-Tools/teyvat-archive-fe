type Props = {
    id: string;
    value: boolean;
    setValue: (value: boolean) => void;
    isDisabled?: boolean;

};

export default function ToggleItem({id, value,setValue, isDisabled=false }: Readonly<Props>) {
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
        className={`w-12 h-6 flex items-center justify-between p-1 rounded-full cursor-pointer transition-all duration-300 disabled:opacity-50
             ${value ? "bg-teal-500" : "bg-gray-300"}`}
        disabled={isDisabled}
        onClick={() => setValue(!value)}
      >
        <div
          className={`w-4 h-4 bg-white rounded-full transition-all duration-300 ${
            value ? "transform translate-x-6" : ""
          }`}
        />
      </button>
    </>
  );
}
