import AttributeMobileContainer from "../../layout/container/attributeMobileContainer";
import DataItemCard from "../dataItemCard";

type Props = {
  skills: ITalent[];
  passiveTalents: ITalent[];
};

export default function TalentsMobile({
  skills,
  passiveTalents,
}: Readonly<Props>) {
  return (
    <>
      <AttributeMobileContainer title="Character Skills">
        <div className="w-full flex flex-col items-start justify-center">
          {skills.map((skill) => (
            <DataItemCard item={skill} key={skill.id} />
          ))}
        </div>
      </AttributeMobileContainer>
      <AttributeMobileContainer title="Passive Talents">
        <div className="w-full flex flex-col items-start justify-center">
          {passiveTalents.map((passivetalent) => (
            <DataItemCard item={passivetalent} key={passivetalent.id} />
          ))}
        </div>
      </AttributeMobileContainer>
    </>
  );
}
