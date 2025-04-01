type Props = {
  imageUrl: string;
};

export default function CarouselItem({ imageUrl }: Readonly<Props>) {
  return (
    <li
      className="absolute h-full w-full"
      style={{
        backgroundImage: `url('${imageUrl}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    />
  );
}
