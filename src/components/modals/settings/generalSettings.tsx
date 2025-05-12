import { useAtom } from "jotai";

import {
  useDisplayDomainRewardUsageAtom,
  useDomainRewardUsageItemAtom,
  useFilterTravelersAtom,
  useSelectedTravelerAtom
} from "~/atoms/feature.atoms";

import SettingsDropdownItem from "../../common/settings/settingsDropDownItem";
import SettingsToggleItem from "../../common/settings/settingsToggleItem";

export default function GeneralSettings() {
  const [useFilterTravelers, setUseFilterTravelers] = useAtom(
    useFilterTravelersAtom
  );
  const [useSelectedTraveler, setUseSelectedTraveler] = useAtom(
    useSelectedTravelerAtom
  );
  const [useDisplayDomainRewardUsage, setUseDisplayDomainRewardUsage] = useAtom(
    useDisplayDomainRewardUsageAtom
  );
  const [useDomainRewardUsageItem, setUseDomainRewardUsageItem] = useAtom(
    useDomainRewardUsageItemAtom
  );

  return (
    <div className="flex flex-col space-y-3">
      <SettingsToggleItem
        value={useFilterTravelers}
        setValue={setUseFilterTravelers}
        id="filterTravelers"
        label="Filter Travelers"
      />
      <SettingsDropdownItem
        value={useSelectedTraveler}
        setValue={setUseSelectedTraveler}
        id="traveler"
        isDisabled={!useFilterTravelers}
        label="Traveler"
        options={[
          { value: "PlayerBoy", label: "Aether" },
          { value: "PlayerGirl", label: "Lumine" }
        ]}
        description={
          !useFilterTravelers
            ? "Enable 'Filter Travelers' to use this feature."
            : ""
        }
      />
      <SettingsToggleItem
        value={useDisplayDomainRewardUsage}
        setValue={setUseDisplayDomainRewardUsage}
        id="rewardUsage"
        label="Display Domain Reward Usage"
      />
       <SettingsDropdownItem
        value={useDomainRewardUsageItem}
        setValue={setUseDomainRewardUsageItem}
        id="rewardUsageItem"
        isDisabled={!useDisplayDomainRewardUsage}
        label="Domain Reward Usage Items"
        options={[
          { value: "all", label: "All" },
          { value: "5", label: "5 Stars Only" },
          { value: "4", label: "4 Stars and 5 Stars" },
          { value: "3", label: "3 Stars, 4 Stars and 5 Stars" }
        ]}
        description={
          !useDisplayDomainRewardUsage
            ? "Enable 'Display Domain Reward Usage' to use this feature."
            : ""
        }
      />
    </div>
  );
}
