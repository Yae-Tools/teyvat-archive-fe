import SettingItemContainer from "~/components/layout/container/settingItemContainer";
import ToggleItem from "../basic/toggleItem";

type Props = {
  value: boolean;
  setValue: (value: boolean) => void;
  id: string;
  label: string;
  description?: string;
  isDisabled?: boolean;
};

export default function SettingsToggleItem({
  value,
  setValue,
  id,
  label,
  description,
  isDisabled,
}: Readonly<Props>) {
  return (
    <SettingItemContainer {...{ id, label, description, isDisabled }}>
      <ToggleItem {...{ id, value, setValue, isDisabled }} />
    </SettingItemContainer>
  );
}
