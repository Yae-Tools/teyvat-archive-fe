import Image from "next/image";

import bdLeft from "~/assets/icons/system/bd-left.png";
import bdRight from "~/assets/icons/system/bd-right.png";

type Props = {
  title: string;
  headerLevel?: number;
};

export default function TeyvatHeading({
  title,
  headerLevel = 3,
}: Readonly<Props>) {
  return (
    <div className="flex items-center justify-center space-x-2">
      <Image src={bdLeft} alt="bd-left" />
      {headerLevel === 1 && (
        <h1 className="w-full text-center primary-text">{title}</h1>
      )}
      {headerLevel === 2 && (
        <h2 className="w-full text-center primary-text">{title}</h2>
      )}
      {headerLevel === 3 && (
        <h3 className="w-full text-center primary-text">{title}</h3>
      )}
      {headerLevel === 4 && (
        <h4 className="w-full text-center primary-text">{title}</h4>
      )}
      {headerLevel === 5 && (
        <h5 className="w-full text-center primary-text">{title}</h5>
      )}
      {headerLevel === 6 && (
        <h6 className="w-full text-center primary-text">{title}</h6>
      )}
      <Image src={bdRight} alt="bd-right" />
    </div>
  );
}
