import Image from "next/image";
import LogoImage from "~/assets/images/logo/logo.jpg";

type Props = {
  size?: "small" | "medium" | "large" | number;
};

export default function LogoHolder({ size = "medium" }: Readonly<Props>) {
  let sizeFilter;
  if (size === "small") {
    sizeFilter = "size-8";
  } else if (size === "large") {
    sizeFilter = "size-16";
  } else if (size === "medium") {
    sizeFilter = "size-12";
  } else {
    sizeFilter = `size-${size}`;
  }

  return (
    <Image
      src={LogoImage}
      alt="logo"
      className={`${sizeFilter} cursor-pointer`}
    />
  );
}
