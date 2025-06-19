import Image from "next/image";
import Link from "next/link";

type Props = {
  name: string;
  url: string;
  icon: string;
  iconSize?: number;
};

export default function SocialIcon({
  name,
  url,
  icon,
  iconSize = 24
}: Readonly<Props>) {
  return (
    <Link href={url} target="_blank" className="cursor-pointer">
      <div className="flex flex-col items-center justify-center space-x-2 p-1 text-white lg:flex-row lg:justify-start">
        <Image src={icon} alt={name} width={iconSize} className="text-white" />
      </div>
    </Link>
  );
}
