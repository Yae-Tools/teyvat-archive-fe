import { GlobeIcon, MonitorCog, WrenchIcon } from "lucide-react";
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
    icon: MonitorCog,
    content: DisplaySettings,
  },
  {
    id: "language",
    title: "Language & Region",
    icon: GlobeIcon,
  },
];

export { SETTINGS_CATEGORIES };
