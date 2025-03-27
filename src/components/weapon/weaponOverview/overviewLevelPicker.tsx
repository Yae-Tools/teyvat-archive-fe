import ButtonGroup from "~/components/common/basic/buttonGroup";

type Props = {
  selectedLevel: number;
  setSelectedLevel: (level: number) => void;
  stars: number;
};

export default function OverviewLevelPicker({
  selectedLevel,
  setSelectedLevel,
  stars,
}: Readonly<Props>) {
  const maxLevel = stars > 2 ? 90 : 70;

  const items = [
    {
      id: 1,
      label: "01",
      value: 1,
      onClick: (level: number | string) => setSelectedLevel(level as number),
    },
    {
      id: 2,
      label: stars > 2 ? "90" : "70",
      value: maxLevel,
      onClick: () => setSelectedLevel(maxLevel),
    },
  ];

  return <ButtonGroup items={items} selectedItem={selectedLevel} />;
}
