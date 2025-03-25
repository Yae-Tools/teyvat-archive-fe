import {
  ComputerDesktopIcon,
  GlobeAltIcon,
  WrenchIcon,
} from "@heroicons/react/16/solid";
import DisplaySettings from "~/components/modals/settings/displaySettings";
import GeneralSettings from "~/components/modals/settings/generalSettings";

const SETTINGS_CATEGORIES = [
  {
    id: "general",
    title: "General",
    icon: WrenchIcon,
    content: GeneralSettings,
  },
  {
    id: "display",
    title: "Display",
    icon: ComputerDesktopIcon,
    content: DisplaySettings,
  },
  {
    id: "language",
    title: "Language & Region",
    icon: GlobeAltIcon,
  },
];

export { SETTINGS_CATEGORIES };
