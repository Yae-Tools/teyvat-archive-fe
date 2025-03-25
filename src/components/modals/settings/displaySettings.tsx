import { useAtom } from "jotai";

import { toggleThemeAtom } from "~/atoms/general.atoms";
import ToggleItem from "~/components/common/basic/toggleItem";

export default function DisplaySettings() {
  const [theme, toggleTheme] = useAtom(toggleThemeAtom);

  return (
    <div className="flex flex-col space-y-3">
      <ToggleItem
        id="darkMode"
        label="Dark Mode"
        value={!theme}
        setValue={() => toggleTheme()}
        isDisabled
      />
    </div>
  );
}
