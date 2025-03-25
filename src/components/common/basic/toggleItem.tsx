import SettingItemContainer from "~/components/layout/container/settingItemContainer";

type Props = {
  value: boolean;
  setValue: (value: boolean) => void;
  id: string;
  label: string;
  description?: string;
  isDisabled?: boolean;
};

export default function ToggleItem({
  value,
  setValue,
  id,
  label,
  description,
  isDisabled,
}: Readonly<Props>) {
  return (
    <SettingItemContainer {...{ id, label, description, isDisabled }}>
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
    </SettingItemContainer>
  );
}
