type Props = {
  imageUrl: string;
};

export default function CarouselItem({ imageUrl }: Readonly<Props>) {
  return (
    <li
      className="absolute w-full h-full"
      style={{
        backgroundImage: `url('${imageUrl}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
}
