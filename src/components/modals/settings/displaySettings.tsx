import { useAtom } from "jotai";

import { toggleThemeAtom } from "~/atoms/general.atoms";
import SettingsToggleItem from "~/components/common/settings/settingsToggleItem";

export default function DisplaySettings() {
  const [theme, toggleTheme] = useAtom(toggleThemeAtom);

  return (
    <div className="flex flex-col space-y-3">
      <SettingsToggleItem
        id="darkMode"
        label="Dark Mode"
        value={!theme}
        setValue={() => toggleTheme()}
        isDisabled
      />
    </div>
  );
}
