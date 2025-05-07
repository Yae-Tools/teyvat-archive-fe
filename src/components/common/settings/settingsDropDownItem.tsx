import SettingItemContainer from "~/components/layout/container/settingItemContainer";

type Props = {
  value: string;
  setValue: (value: string) => void;
  id: string;
  label: string;
  options: {
    value: string;
    label: string;
  }[];
  description?: string;
  isDisabled?: boolean;
};

export default function SettingsDropdownItem({
  value,
  setValue,
  id,
  label,
  options,
  description,
  isDisabled = false
}: Readonly<Props>) {
  return (
    <SettingItemContainer {...{ id, label, description, isDisabled }}>
      <select
        id={id}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="primary-text mr-2 text-center block w-full rounded-md border border-slate-300 bg-slate-800 px-4 py-1 text-sm shadow-sm focus:outline-none dark:border-slate-700"
        disabled={isDisabled}
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className="primary-text"
          >
            {option.label}
          </option>
        ))}
      </select>
    </SettingItemContainer>
  );
}
