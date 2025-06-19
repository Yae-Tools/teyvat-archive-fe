import DescriptionDesktop from "../../common/descriptionDesktop";

type Props = {
  title: string;
  name: string;
  description: string;
};

export default function CharacterProfileDesktop({
  title,
  name,
  description
}: Readonly<Props>) {
  return (
    <div className="flex w-full flex-col items-start justify-center">
      <h2 className="font-algoindeEnka text-shadow-lg/70 xl:text-6xl">
        {name}
      </h2>
      <h4 className="font-algoindeEnka mt-6 font-sans! text-2xl font-semibold tracking-widest uppercase drop-shadow-xl">
        {title}
      </h4>
      <div className="w-2/3">
        <DescriptionDesktop {...{ description }} />
      </div>
    </div>
  );
}
